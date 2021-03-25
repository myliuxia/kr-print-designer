import Vue from 'vue'

interface StoreArg {
  state:Object
  mutations:Object
  actions:Object
  plugins:Object[] 
  subscribers:any[]
}


function resolveSource(source:Object, type:Function|string) {
  return typeof type === 'function' ? type : source[type]
}

function normalizeMap(map:any[]|Object) {
  return Array.isArray(map)
    ? map.map(k => ({ k, v: k }))
    : Object.keys(map).map(k => ({ k, v: map[k] }))
}

const createMapState = _store => states => {
  const res = {}
  const db = normalizeMap(states)
  for (const k in db) {
    let v = db[k]
    res[k] = function () {
      const store = _store || this.$vptd
      return typeof v === 'function'
        ? v.call(this, store.state)
        : store.state[v]
    }
  }
  return res
}

const mapToMethods = (sourceName, runnerName, _store) => map => {
  const res = {}
  const db = normalizeMap(map)
  for (const k in db) {
    let v = db[k]
    res[k] = function (payload) {
      const store = _store || this.$vptd
      const source = store[sourceName]
      const runner = store[runnerName]
      const actualSource = typeof v === 'function' ? v.call(this, source) : v
      return runner.call(store, actualSource, payload)
    }
  }
  return res
}

export default class Store {
  vm:Vue
  mutations:Object
  actions:Object
  subscribers:any[]
  mapState:Object
  mapActions:Object
  mapMutations:Object
  constructor(
    { state, mutations = {}, actions = {}, plugins, subscribers = [] }:StoreArg
  ) {
    this.vm = new Vue({
      data: {
        $$state: typeof state === 'function' ? state() : state
      }
    })
    this.mutations = mutations
    this.actions = actions
    this.subscribers = subscribers

    if (plugins) {
      plugins.forEach((p:any) => this.use(p))
    }

    this.mapState = createMapState(this)
    this.mapActions = mapToMethods('actions', 'dispatch', this)
    this.mapMutations = mapToMethods('mutations', 'commit', this)
  }

  get state() {
    return this.vm.$data.$$state
  }

  set state(v) {
    if (process.env.NODE_ENV === 'development') {
      throw new Error(
        '[puex] store.state is read-only, use store.replaceState(state) instead'
      )
    }
  }

  $emit(event:string, ...args:any[]) {
    return this.vm.$emit(event, ...args)
  }

  $on(event:string, callback:Function) {
    return this.vm.$on(event, callback)
  }

  subscribe(sub:any) {
    this.subscribers.push(sub)
    return () => this.subscribers.splice(this.subscribers.indexOf(sub), 1)
  }

  commit(type:string, payload:any) {
    this.subscribers.forEach(sub => sub({ type, payload }, this.state))
    const mutation = resolveSource(this.mutations, type)
    return mutation && mutation(this.state, payload)
  }

  dispatch(type:string, payload:any):any {
    const action = resolveSource(this.actions, type)
    const ctx = {
      state: this.state,
      dispatch: this.dispatch.bind(this),
      commit: this.commit.bind(this),
      store: this
    }
    return Promise.resolve(action && action(ctx, payload))
  }

  use(fn:Function) {
    fn(this)
    return this
  }

  replaceState(state:Object) {
    this.vm.$data.$$state = state
    return this
  }
}

export const mapState = createMapState()
export const mapActions = mapToMethods('actions', 'dispatch')
export const mapMutations = mapToMethods('mutations', 'commit')
