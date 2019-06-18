import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    list:state.MyRedux.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContent:function (myid) {
      // 模拟ajax
      setTimeout(()=>{
        let list = [
          {id:1,title:"标题1",content:"你好"},
          {id:2,title:"标题2",content:"你好你好"},
          {id:3,title:"标题3",content:"你好你好你好"},
          {id:4,title:"标题4",content:"你好你好你好你好"},
          {id:5,title:"标题5",content:"你好你好你好你好你好"}
        ];
        dispatch({
          type: 'FETCH_MYCONTENT',
          list:list
        })
      },0)
    }
  };
}
class My extends Component {

  render() {
    return (
      <div>
        <h3>我的</h3>
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
        <Link to="/Home">
          <div>点击跳转到首页</div>
        </Link>
      </div>
    );
  }
  fetchContent(){
    this.props.fetchContent();
  }
  componentWillMount() {
    this.fetchContent();
  }
  componentDidMount() {
    console.log("My渲染完毕")
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(My);