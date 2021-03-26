import Vue from 'vue'
// import Vue from 'vue/types/vue'
import {State} from '@/store/types'


export interface StoreArg {
  state:State 
  mutations?:Object
  actions?:Object
  plugins?:Object[] 
  subscribers?:any[]
  commit?:Function
  dispatch?:Function
}


function resolveSource(source:Object, type:Function|string) {
  return typeof type === 'function' ? type : source[type]
}


export default class Store {
  vm:Vue
  mutations:Object
  actions:Object
  subscribers:any[]
  constructor(
    { state, mutations = {}, actions = {}, plugins, subscribers = [] }:StoreArg
  ) {
    this.vm = new Vue({
      data: {
        $$state: state
      }
    })
    this.mutations = mutations
    this.actions = actions
    this.subscribers = subscribers

    if (plugins) {
      plugins.forEach((p:any) => this.use(p))
    }

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

