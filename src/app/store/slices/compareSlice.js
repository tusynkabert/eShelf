import { createSlice } from "@reduxjs/toolkit";
import setCompareProduct from "../../helpers/setCompareProduct";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    data: JSON.parse(localStorage.getItem("compare"))?.data ?? [],
    selectedCategory: JSON.parse(localStorage.getItem("compare"))?.selectedCategory ?? null,
    canAddMore: (JSON.parse(localStorage.getItem("compare"))?.data ?? []).length != 2,
  },
  reducers: {
    toggleCompare: (state, action) => {
      const { data, selectedCategory } = state;
      const { category } = action.payload;

      const id = action.payload?._id || action.payload?.id;

      const productAlreadyAdded = data.findIndex((i) => i.id === id) >= 0;

      if (!productAlreadyAdded) {
        if (state.canAddMore) {
          if (selectedCategory === null) {
            state.selectedCategory = category;
          } else if (selectedCategory !== category) {
            alert("Products shoud be from the same category!");
            return;
          }
          state.data = [...data, { id, ...setCompareProduct(action.payload) }];
          state.canAddMore = state.data.length < 2;
        } else {
          alert("Two products already added to compare!");
        }
      } else {
        state.data = data.filter((item) => item.id !== id);
        state.canAddMore = true;
        if (state.data.length === 0) {
          state.selectedCategory = null;
        }
      }

      const newState = { ...state };

      localStorage.setItem("compare", JSON.stringify(newState));
    },
  },
});

export const { toggleCompare } = compareSlice.actions;

export default compareSlice.reducer;
