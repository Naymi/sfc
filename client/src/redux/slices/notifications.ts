import { createSlice } from "@reduxjs/toolkit"
import { IState } from "./i-state"

export interface INotificationState {
  notifications: { id: number; message: string; title: string }[]
}

const notificationSlice = createSlice({
  name: "notifications",
  initialState: { notifications: [] } as INotificationState,
  reducers: {
    add(state, { payload: { message, title = "Оповещение" } }) {
      state.notifications.push({ message, id: Math.random(), title })
    },
    remove(state, { payload: notificationId }) {
      state.notifications = state.notifications.filter(
        ({ id }) => id !== notificationId,
      )
    },
    clear(state) {
      state.notifications = []
    },
  },
})
export const { reducer } = notificationSlice
export const { add, remove, clear } = notificationSlice.actions
export const notificationSelector = ({ notificationSlice }: IState) =>
  notificationSlice.notifications
