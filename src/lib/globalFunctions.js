import dateFormat from "dateformat";

export function formatDateString(date) {
  let dateValue = "";
  if (typeof date === "string") {
    // eslint-disable-next-line no-useless-escape
    dateValue = dateFormat(date.split("T")[0].replace(/-/g, "/"), "dd/mm/yyyy");
  } else {
    dateValue = dateFormat(date, "dd/mm/yyyy");
  }
  return dateValue;
}
