import React from 'react';
import { Form, FormGroup, FormControl, Col, Checkbox, Button, ControlLabel } from 'react-bootstrap'

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: { username: "", password: "" }
    };
  }


  onSubmit() {
    if (this.state.data.username === "abc@gmail.com" && this.state.data.password === "abcd") {
      let userInfo = {
        email: "abc@gmail.com",
        name: "abcd"
      }
      window.localStorage.setItem("session", JSON.stringify(userInfo));
      window.location.href = "/";
    }
  }

  onChangeHandle(event) {
    let data = this.state.data;
    let name = event.target.name;
    data[name] = event.target.value;
    this.setState({ data: data });
  }

  render() {

    return (

      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
              </Col>
            <Col sm={10}>
              <FormControl name="username" onChange={this.onChangeHandle.bind(this)} type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
              </Col>
            <Col sm={10}>
              <FormControl name="password" onChange={this.onChangeHandle.bind(this)} type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="button" onClick={this.onSubmit.bind(this)}>Sign in</Button>
            </Col>
          </FormGroup>
        </Form>;
          </div>
    );

  }
}

export default LoginForm;

