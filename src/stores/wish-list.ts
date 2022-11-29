import { defineStore } from "pinia";

export const useWishListStore = defineStore({
  id: "wish-list",
  state: () => ({
    list: {
      items: [],
    },
  }),
  getters: {
    wishList: (state) => state.list,
  },
  actions: {
    addItem(product) {
      this.list.items.push(product);
    },
  },
});
