import { IUserState } from "./user"
import { IPostsState } from "./posts"
import { INotificationState } from "./notifications"

export interface IState {
  userSlice: IUserState
  postsSlice: IPostsState
  notificationSlice: INotificationState
}
