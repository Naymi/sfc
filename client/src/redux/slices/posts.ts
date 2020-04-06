import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { IState } from "./i-state"
import { PostsApi } from "../../api/PostsApi"
import { actionLogOut } from "./user"
export interface IPost {
  id: number
  title: string
  content: string
}
export interface IPostsState {
  data: IPost[]
  meta: {
    fetching: boolean
  }
}

const postsApi = new PostsApi()
const initialState: IPostsState = {
  data: [],
  meta: {
    fetching: false,
  },
}

export const actionFetchPosts = createAsyncThunk("posts/fetch", async () => {
  return await postsApi.fetchPosts()
})
export const actionCreatePost = createAsyncThunk(
  "posts/create",
  async (data: { content: string; title: string }) => {
    return await postsApi.createPost(data)
  },
)
export const actionRemovePost = createAsyncThunk(
  "posts/remove",
  async (id: number) => {
    return await postsApi.removePost(id).then(() => id)
  },
)
export const actionUpdatePost = createAsyncThunk(
  "posts/update",
  async ({ id, ...post }: IPost) => {
    return await postsApi.updatePost(id, post)
  },
)

const postsSlice = createSlice({
  name: "posts",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(actionFetchPosts.rejected, (state, action) => {
      alert("fetch error")
    })
    builder.addCase(actionFetchPosts.fulfilled, (state, { payload }) => {
      if (payload) state.data = payload
    })
    builder.addCase(actionCreatePost.pending, (state) => {
      state.meta.fetching = true
    })
    builder.addCase(actionCreatePost.fulfilled, (state, { payload }) => {
      state.data.push(payload)
      state.meta.fetching = false
    })
    builder.addCase(actionRemovePost.pending, (state) => {
      state.meta.fetching = true
    })
    builder.addCase(actionRemovePost.fulfilled, (state, { payload }) => {
      state.data = state.data.filter(({ id }) => id !== payload)
      state.meta.fetching = false
    })
    builder.addCase(actionUpdatePost.fulfilled, (state, { payload }) => {
      if (payload)
        state.data = state.data.map((post) =>
          post.id === payload.id ? { id: post.id, ...payload } : post,
        )
      state.meta.fetching = false
    })
    builder.addCase(actionLogOut.fulfilled, (state) => {
      state.data = []
    })
  },
})
export default postsSlice.reducer

export const userPostsSelector = (state: IState) => {
  return state.postsSlice.data
}
