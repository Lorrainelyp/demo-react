import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    outLogin:function (history) {
      dispatch({type:"OUT_LOGIN"});
      history.push('/')
    }
  };
}
class Home extends Component {
  render() {
    return (
      <div>
        <h3>主页</h3>
        <div>
          <button onClick={this.outLogin.bind(this)}>退出登录</button>
        </div>
      </div>
    );
  }

  outLogin(){
    this.props.outLogin(this.props.history);
  }

  componentDidMount() {
    console.log("Home渲染完毕")
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);