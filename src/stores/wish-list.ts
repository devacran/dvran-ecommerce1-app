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
      const index = this.list.items.findIndex((item) => item.id === product.id);
      if (index === -1) {
        this.list.items.push(product);
      } else {
        this.list.items.splice(index, 1);
      }
    },
  },
});
