import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import userSlice from "./slices/user"
import postsSlice from "./slices/posts"
import { reducer as notificationSlice } from "./slices/notifications"
import errorHandler from "./middlewares/errorHandler"
const reducer = {
  userSlice,
  postsSlice,
  notificationSlice,
}
export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), errorHandler],
})
