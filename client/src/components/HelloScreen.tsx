import React, { useState } from "react"

import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import { Tabs, Tab, Row, Col } from "react-bootstrap"
function HelloScreen() {
  const [key, setKey] = useState("login")
  return (
    <Row className="justify-content-md-center">
      <Col xs={3}>
        <Tabs onSelect={setKey} activeKey={key} id="uncontrolled-tab-example">
          <Tab eventKey="login" title="login">
            <LoginForm></LoginForm>
          </Tab>
          <Tab eventKey="signup" title="signup">
            <SignUpForm onComplete={() => setKey("login")}></SignUpForm>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  )
}

export default HelloScreen
