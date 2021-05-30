const initialState = {
  formData: {
    company: "",
    name: "",
    phone: "",
    email: "",
  },
  prefix: "",
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return {
        ...state,
        formData: action.payload,
      };
    case "SET_COUNTRY_PREFIX":
      return {
        ...state,
        prefix: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
