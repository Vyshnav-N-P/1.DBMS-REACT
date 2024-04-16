import { create } from "zustand";

export const usecartStore = create((set) => ({
  cart: [],
  addtocart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removefromcart: (productid) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productid),
    })),
  clearcart: () => set({ cart: [] }),
  qtysetter: (id, qty) =>
    set((state) => ({
      cart: state.cart.map((item, index) =>
        index === id ? { ...item, qty: qty } : item
      ),
    })),
}));
