import React from "react"
import { Container, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  actionLogOut,
  userIsLoginSelector,
  userNameSelector,
} from "../redux/slices/user"
import styled from "styled-components"

const HeaderBar = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`

function Header() {
  const dispatch = useDispatch()
  const isLogin = useSelector(userIsLoginSelector)
  const userName = useSelector(userNameSelector)
  return (
    <Container>
      <HeaderBar>
        <div>SFC test task</div>
        {isLogin && (
          <div>
            Hello {userName}&nbsp;
            <Button onClick={() => dispatch(actionLogOut())}>Logout</Button>
          </div>
        )}
      </HeaderBar>
    </Container>
  )
}

export default Header
