//reducer
var homeContent={
  arr:[]
};

function HomeRedux(state = homeContent, action) {
  switch (action.type) {
    case "FETCH_CONTENT":
      //获取后台数据
      var listArr = action.list;
      return Object.assign({},state,{arr:listArr});
    default:
      return state
  }
}

export default HomeRedux