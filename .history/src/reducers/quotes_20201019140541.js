export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      
      return{};
    case 'UPVOTE_QUOTE':
      
      return{};
    case 'DOWNVOTE_QUOTE':
      
      return{};
  
    default:
      return state;
  }
}
