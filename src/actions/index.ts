export const setCountryPrefix = (prefix: string) => {
  return {
    type: "SET_COUNTRY_PREFIX",
    payload: prefix,
  };
};
export const setFormData = (data: Record<string, unknown>) => {
  return {
    type: "SET_FORM_DATA",
    payload: data,
  };
};
