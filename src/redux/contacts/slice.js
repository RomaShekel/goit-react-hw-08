import {  createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        item: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload
        })
        .addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.item.push(action.payload)
        })
        .addCase(addContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(deleteContact.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.item = state.item.filter(
                (item) => item.id !== action.payload.id
            )
        })
        .addCase(deleteContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(logout.fulfilled, (state) => {
            state.item = [];
            state.error = null;
            state.loading = false;
          });
    }
})

export default contactsSlice.reducer;

 
