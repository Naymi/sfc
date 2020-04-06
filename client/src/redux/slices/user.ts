import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { UserApi } from "../../api/UserApi"
import { IState } from "./i-state"
import { add } from "./notifications"
export interface IUser {
  login: string
  name: string
  token: string
}
export interface IUserState {
  user: IUser
  meta: {
    isLogin: boolean
    fetching: boolean
  }
}

const initialUser: IUser = { login: "", token: "", name: "" }
const userApi = new UserApi()

export const actionLogIn = createAsyncThunk(
  "user/login",
  async (user: { login: string; pass: string }, thunkApi) => {
    const result = await userApi.login(user)
    return result
  },
)
export const actionSignUp = createAsyncThunk(
  "user/sign-up",
  async (user: { login: string; pass: string; name: string }, thunkApi) => {
    const r = await userApi.signUp(user)
    debugger
    thunkApi.dispatch(
      add({
        id: Math.random(),
        title: "Успешно",
        message: "Вы зарегистрированы",
      }),
    )
    return r
  },
)
export const actionLogOut = createAsyncThunk("user/logout", async () => {
  return await userApi.logout()
})
export const actionCheckedLoginUser = createAsyncThunk(
  "user/check-login",
  async () => {
    return await userApi.checkLogin()
  },
)
const initialState: IUserState = {
  user: initialUser,
  meta: {
    isLogin: false,
    fetching: false,
  },
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(actionLogIn.pending, (state) => {
      state.meta.fetching = true
    })

    builder.addCase(actionLogIn.fulfilled, (state, { payload }) => {
      state.user = payload
      state.meta.isLogin = true
      state.meta.fetching = false
    })

    builder.addCase(actionLogOut.pending, (state, action) => {
      state.meta.fetching = true
    })
    builder.addCase(actionLogOut.fulfilled, (state: IUserState, action) => {
      state.user = initialUser
      state.meta.isLogin = false

      state.meta.fetching = false
      localStorage.removeItem("token")
    })

    builder.addCase(
      actionCheckedLoginUser.fulfilled,
      (state: IUserState, { payload }) => {
        if (payload) {
          state.user = payload
          state.meta.isLogin = true
        }
        state.meta.fetching = false
      },
    )
  },
  reducers: {},
})
export default userSlice.reducer
export const currentUserSelector = ({ userSlice: { user } }: IState) => user

export const userIsLoginSelector = (state: IState) => {
  return state.userSlice.meta.isLogin
}

export const userFetchingSelector = ({
  userSlice: {
    meta: { fetching },
  },
}: IState) => fetching

export const userNameSelector = ({
  userSlice: {
    user: { name },
  },
}: IState) => name
