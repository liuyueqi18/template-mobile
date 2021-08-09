import { UserInfo } from "@/utils/types";
import { Module } from "vuex";

export type State = {
  login: boolean;
  userInfo: UserInfo;
};

const baseModule: Module<State, unknown> = {
  namespaced: true,
  state: {
    login: false,
    userInfo: {
      name: "",
      id: "",
      age: 0,
    },
  },
  mutations: {
    login(state, userInfo) {
      state.login = true;
      state.userInfo = userInfo;
    },
  },
  actions: {},
};

export default baseModule;
