import { defineStore } from "pinia";

export const useItemTypeStore = defineStore("itemTypeStore", {
  // Data
  state: () => ({
    type: "item",
  }),
  // Computed
  getters: {
    doubleType: (state) => {
        state.type = "new item";
    }
  },
  // Methods
  actions: {
    changeType: (newType) => {
      this.type = newType;
    }
  },
});
