import { State } from "./types";

export interface StoreObj {
  state: State;
  mutations: Object;
  actions: Object;
  plugins: Object[];
  subscribers: any[];
  commit: Function;
  dispatch: Function;
}

export default <Object>{
  // 添加模板项
  addTempItem({ state, commit }: StoreObj, item: any) {
    commit("addTempItem", item);
    // 设置选中
    commit("select", {
      uuid: state.page.tempItems[state.page.tempItems.length - 1].uuid
    });
  },

  // 初始化模板设计器
  async designerInit({ state, commit }: StoreObj, tempInfo: any) {
    commit("initOptionItems", tempInfo.options);
    commit("initPage", tempInfo.tempValue);
  }
};
