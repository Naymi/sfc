import React, { useEffect } from "react"
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
function App() {
  const isLogin = useSelector(userIsLoginSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionCheckedLoginUser())
  }, [])
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
