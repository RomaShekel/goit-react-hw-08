import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFilters } from "./filtersSlice";

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
    }
})

export const selectContacts = state => state.contacts.item;

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilters], 
    (contacts, filter) => {
        return contacts.filter((contact) => 
        contact.name.toLowerCase().includes(filter.toLowerCase())
        )
    }
)

export default contactsSlice.reducer;

 
