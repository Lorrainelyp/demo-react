import React, { Component } from 'react';
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    gologin:function (username,password,history) {
      //模拟ajax
      setTimeout(()=>{
        console.log("username:"+username);
        console.log("password:"+password);
        dispatch({type:"GO_LOGIN"});
        history.push('/Home');
      },0)
    }
  }
}

class Login extends Component {
  render() {
    return (
      <div>
        <h3>登录页面</h3>
        <div>
          用户名<input type="text" ref="username"/>
        </div>
        <div>
          密码<input type="text" ref="password" />
        </div>
        <div>
          <button onClick={this.goLogin.bind(this)}>登录</button>
        </div>
      </div>
    );
  }

  goLogin(){
    this.props.gologin(this.refs.username.value,this.refs.password.value,this.props.history);
  }

  componentDidMount() {
    console.log("Login渲染完毕")
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Login);