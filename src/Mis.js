import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';

class Mis extends Component {
  state = {
    username: "",
    password: "",
  }
  setUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  loginHandle() {
    const { username, password } = this.state;
    fetch("http://yapi.s2.hahhub.com/mock/13/album/users/login", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res && res.code === 200) {
          this.props.history.push("/menage");
        } else {
          window.confirm(res && res.msg ? res.msg : "登陆失败");
        }
      });
  }
  passWord(f) {
    this.setState({
      password: f.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="username">
            <span>用户名:</span>
            <input
              type="input"
              placeholder="请输入账号（admin）"
              maxLength="8"
              onChange={this.setUsername.bind(this)}
            />
          </div>
          <div className="password">
            <span>密&nbsp;&nbsp;&nbsp;&nbsp;码:</span>
            <input
              type="password"
              placeholder="请输入密码（123456）"
              maxLength="8"
              onChange={this.passWord.bind(this)}
            />
          </div>
          <div className="submit">
            <input
              type="button"
              value="登陆"
              onClick={this.loginHandle.bind(this)}
            />
            {/* <input type="button" value="注册" /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Mis);
