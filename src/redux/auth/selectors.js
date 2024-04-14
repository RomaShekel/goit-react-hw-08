
export const selectUsername = (state) => state.auth.user.name;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;