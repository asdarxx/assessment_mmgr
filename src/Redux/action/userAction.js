export const getUserData = (userData) => {
    return {
      type: "GET",
      payload: {
        userData,
      },
    };
  };
  