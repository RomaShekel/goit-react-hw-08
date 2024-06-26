import { selectFilters } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

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