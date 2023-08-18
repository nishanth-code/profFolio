import moment from "moment";
export const formatDateForForms = (timestamp) => {
  return moment(timestamp).format("YYYY-MM-DD");
};
