import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonGroup } from "react-bootstrap"
import PostCard from "./PostCard"
import MaterialIcon from "material-icons-react"
import ChangePostModal from "./ChangePostModal"
import styled from "styled-components"
import {
  userPostsSelector,
  actionFetchPosts,
  actionCreatePost,
  actionUpdatePost,
  actionRemovePost,
} from "../redux/slices/posts"

const PostGrid = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  gap: 20px;
`
function Posts() {
  const dispatch = useDispatch()
  const posts = useSelector(userPostsSelector)
  const [changedPost, setChangedPost] = useState(null as any)
  useEffect(() => {
    dispatch(actionFetchPosts())
  }, [])
  const [showChangePostModal, setShowChangePostModal] = useState(false)
  return (
    <div>
      <ChangePostModal
        show={showChangePostModal && !changedPost}
        onHide={() => setShowChangePostModal(false)}
        onSubmit={(v) =>
          dispatch(actionCreatePost(v))
            // @ts-ignore
            .then(async (r) => {
              setShowChangePostModal(false)
              return true
            })
            // @ts-ignore
            .catch((r) => false)
        }
      />
      {changedPost && (
        <ChangePostModal
          // @ts-ignore
          defaultValue={{
            title: changedPost.title,
            content: changedPost.content,
          }}
          // @ts-ignore
          show={showChangePostModal}
          onHide={() => setShowChangePostModal(false)}
          onSubmit={(v) =>
            dispatch(actionUpdatePost({ ...v, id: changedPost.id }))
              // @ts-ignore
              .then(async (r) => {
                setShowChangePostModal(false)
                setChangedPost(null)
                return true
              })
              // @ts-ignore
              .catch((r) => false)
          }
        />
      )}
      <ButtonGroup className="mr-2">
        <Button onClick={() => setShowChangePostModal(true)}>
          <MaterialIcon icon={"add"} color={"#fff"}></MaterialIcon>
        </Button>
        <Button onClick={() => dispatch(actionFetchPosts())}>
          <MaterialIcon icon={"cached"} color={"#fff"}></MaterialIcon>
        </Button>
      </ButtonGroup>
      <PostGrid>
        {posts.map(({ id, ...post }) => (
          <PostCard
            post={post}
            key={id}
            // @ts-ignore
            onRemove={async () => dispatch(actionRemovePost(id))}
            // @ts-ignore
            onUpdate={async (v) => {
              dispatch(actionUpdatePost({ id, ...v }))
                // @ts-ignore
                .then(async (r) => {
                  setShowChangePostModal(false)
                  setChangedPost(null)
                  return true
                })
                // @ts-ignore
                .catch((r) => false)
            }}
          ></PostCard>
        ))}
      </PostGrid>
    </div>
  )
}

export default Posts
