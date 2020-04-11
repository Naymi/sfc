import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import HelloScreen from "./components/HelloScreen"
import { useSelector, useDispatch } from "react-redux"
import {
  userIsLoginSelector,
  actionCheckedLoginUser,
} from "./redux/slices/user"
import Posts from "./components/Posts"
import Header from "./components/Header"
import { Container } from "react-bootstrap"
import Notifications from "./components/Notifications"
import Loader from "./components/Loader"
import styled from "styled-components"
const CenterBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
function App() {
  const isLogin = useSelector(userIsLoginSelector)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // @ts-ignore
    dispatch(actionCheckedLoginUser()).then(() => setLoading(false))
  }, [])
  if (loading) {
    return (
      <CenterBox>
        <Loader />
      </CenterBox>
    )
  }
  return (
    <div>
      <Notifications></Notifications>
      <Header></Header>
      <Container>
        {!isLogin ? <HelloScreen></HelloScreen> : <Posts></Posts>}
      </Container>
    </div>
  )
}

export default App
