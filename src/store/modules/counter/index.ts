import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';

import {
  counterGetters,
  counterActions,
  counterMutations,
} from '@/store/modules/counter/publicConstants';

import { IRootState } from '@/interfaces/store/root-state.interface';
import { ICounterSate } from '@/interfaces/store/counter.interface';

const state: ICounterSate = {
  value: 0,
};

const getters: GetterTree<ICounterSate, IRootState> = {
  [counterGetters.VALUE]: (state) => state.value,
};

const actions: ActionTree<ICounterSate, IRootState> = {
  [counterActions.PLUS]: ({ commit }) => {
    commit(counterMutations.PLUS);
  },
  [counterActions.MINUS]: ({ commit }) => {
    commit(counterMutations.MINUS);
  },
};

const mutations: MutationTree<ICounterSate> = {
  [counterMutations.PLUS]: (state) => {
    state.value += 1;
  },
  [counterMutations.MINUS]: (state) => {
    state.value -= 1;
  },
};

export const counterModule: Module<ICounterSate, IRootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
