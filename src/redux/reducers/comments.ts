const initialState = {
  comments: 0,
};

export const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "+":
      return {
        comments: state.comments + action.payload,
      };
    case "-":
      return {
        comments: state.comments - action.payload,
      };

    default:
      return state;
  }
};
