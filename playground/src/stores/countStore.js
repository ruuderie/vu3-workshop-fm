import { defineStore } from "pinia";

export const useCountStore = defineStore('CountStore', {
    //data
    state: () => ({
        count: 0,
        incrementAmount: 80
    }),
    //computed
    getters: {
        doubleCount: (state) => {
            return this.count * 2 
        }
    },
    //methods
    actions: {
        increment() {
            this.count+= this.incrementAmount;
        }
    }

})