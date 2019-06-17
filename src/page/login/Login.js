import React, { Component } from 'react';
class Login extends Component {

  render() {
    return (
      <div>
        <h3>登录页面</h3>
        <div>
          用户名<input type="text" />
        </div>
        <div>
          密码<input type="text" />
        </div>
        <div>
          <button onClick={this.goLogin}>登录</button>
        </div>
      </div>
    );
  }

  goLogin(){
    alert("开始登录")
  }

  componentDidMount() {
    console.log("Login渲染完毕")
  }

}

export default Login