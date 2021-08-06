import Vuex, { Store } from "vuex";
import base, { State as BaseState } from "./base";

type State = {
  base: BaseState;
};

const store = new Vuex.Store<State>({
  modules: {
    base,
  },
});

export type StoreInstance = Store<State>;
export default store;
