  const initialState = {
    userData:[],
  };

  const getUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET":
        return {
          ...state,
          userData: action.payload.userData,
        };
      default:
        return { ...state };
    }
  };
  
export default getUserDataReducer;