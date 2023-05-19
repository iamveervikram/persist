import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "tex",

  initialState: {
    boxContent: [],
  },

  reducers: {
    addItemToBox(state, action) {
      const newItemOnBox = action.payload;

      state.boxContent.push({
        id: newItemOnBox.id,

        textContent: newItemOnBox.textContent,

        fSize: newItemOnBox.fSize,

        fWidth: newItemOnBox.fWidth,
        fStyle: newItemOnBox.fStyle,
        showTextBox: newItemOnBox.showTextBox,
      });
    },

    removeItemFromBox(state, action) {
      const getId = action.payload;

      const existing = state.boxContent.find((item) => item.id === getId);

      if (existing) {
        state.boxContent = state.boxContent.filter((el) => el.id !== getId);
      } else {
      }
    },
    editItemInBox(state, action) {
      const getId = action.payload;

      const existing = state.boxContent.find((item) => item.id === getId);

      if (existing) {
        // state.boxContent=state.boxContent.filter(el=>el.id !== getId)
      } else {
      }
    },
    showTextBoxHandler(state, action) {
      const replacedItems = action.payload;

      const existing = state.boxContent.find(
        (item) => item.id === replacedItems.id
      );

      existing.showTextBox = replacedItems.showTextBox;
      existing.textContent = replacedItems.textContent;
      existing.fSize = replacedItems.fSize;
      existing.fWidth = replacedItems.fWidth;
      existing.fStyle = replacedItems.fStyle;
    },
  },
});

export const textActions = textSlice.actions;

export default textSlice;
