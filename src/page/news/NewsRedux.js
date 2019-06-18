//reducer
var newsinit={
  list:[]
};

function NewsRedux(state = newsinit, action) {
  switch (action.type) {
    case "SORT_REVERSE":
      //倒叙显示
      var arr=state.list;
      var arr2=[];
      for(var i=arr.length-1;i>=0;i--){
        arr2.push(arr[i])
      }
      return Object.assign({},state,{list:arr2});
    case "FETCH_NEWSLIST":
      //获取新闻列表
      var listArr = action.list;
      return Object.assign({},state,{list:listArr});
    default:
      return state
  }
}

export default NewsRedux