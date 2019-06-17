//reducer
var isLogin=false;

function indexRedux(state = isLogin, action) {
  switch (action.type) {
    case "GO_LOGIN":
      return true
    case "OUT_LOGIN":
      return false;
    default:
      return state
  }
}

export default indexRedux