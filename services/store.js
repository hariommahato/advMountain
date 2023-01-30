import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { companyApi } from "./company.js";
import { adminInteractionApi } from "./adminInteraction";
export const store = configureStore({
  reducer: {
   
    [companyApi.reducerPath]: companyApi.reducer,
    [adminInteractionApi.reducerPath]:adminInteractionApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(companyApi.middleware).concat(adminInteractionApi.middleware)
});

setupListeners(store.dispatch);