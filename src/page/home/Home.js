import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    list:state.HomeRedux.arr
  }
}

function mapDispatchToProps(dispatch) {
  return {
    outLogin:function (history) {
      dispatch({type:"OUT_LOGIN"});
      history.push('/')
    },
    fetchContent:function () {
      // 模拟ajax
      setTimeout(()=>{
        let list = [
          {id:1,title:"标题1",content:"1111111111111"},
          {id:2,title:"标题2",content:"222222222222"},
          {id:3,title:"标题3",content:"33333333333333"},
          {id:4,title:"标题4",content:"4444444444444"},
          {id:5,title:"标题5",content:"555555555555"}
        ];
        dispatch({
          type: 'FETCH_CONTENT',
          list:list
        })
      },0)
    }
  };
}
class Home extends Component {
  render() {
    return (
      <div>
        <h3>主页</h3>
        <ul>
          {
            this.props.list.map((item,i)=>
              <li key={item.id}>
                <a>{item.title}</a>
                <span>{item.content}</span>
              </li>
            )
          }
        </ul>
        <div>
          <button onClick={this.outLogin.bind(this)}>退出登录</button>
        </div>
        <Link to="/News">
          <div>点击跳转到新闻页</div>
        </Link>
      </div>
    );
  }

  outLogin(){
    this.props.outLogin(this.props.history);
  }
  fetchContent(){
    this.props.fetchContent();
  }

  componentWillMount() {
    this.fetchContent();
    // console.log(this.props)
  }

  componentDidMount() {
    console.log("Home渲染完毕")
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);