import moment from "moment";
export const formatDate = (timestamp) => {
  return moment(timestamp).format("DD-MM-YYYY");
};
