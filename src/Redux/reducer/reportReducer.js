const initialState = {
    dataReport : [],
  };

  const reportReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET":
        return {
          ...state,
          dataReport: action.payload.data
         
        };
      default:
        return { ...state };
    }
  };
  
export default reportReducer;