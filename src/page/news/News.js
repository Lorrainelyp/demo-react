import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    list:state.NewsRedux.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortreverse:function () {
      dispatch({type:'SORT_REVERSE'})
    }
  };
}

class News extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>新闻页面</h3>
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
        <button onClick={this.sortreverse.bind(this)}>倒序显示</button>
      </div>
    );
  }

  sortreverse(){
    this.props.sortreverse();
  }

  componentDidMount() {
    console.log("News渲染完毕")
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);
