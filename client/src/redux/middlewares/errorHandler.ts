import { add } from "../slices/notifications"

// @ts-ignore
export default (store) => (next) => (action) => {
  if (action.error) {
    if (action.error.message === "Failed to fetch") {
      store.dispatch(add({ title: "Ошибка", message: "Сервер недоступен" }))
    } else {
      store.dispatch(add({ title: "Ошибка", message: action.error.message }))
    }
  }
  let result = next(action)
  return result
}
