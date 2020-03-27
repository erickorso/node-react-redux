
export default (state = [], action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return {
        ...state,
        users: action.users
      };

    default:
      break;
  }

  return state;
};
