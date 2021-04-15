import dateFormat from "dateformat";

export function formatDateString(date) {
  let dateValue = "";
  if (typeof date === "string") {
    // eslint-disable-next-line no-useless-escape
    dateValue = dateFormat(
      date.split("T")[0].replace(/\-/g, "/"),
      "mm/dd/yyyy"
    );
  } else {
    dateValue = dateFormat(date, "mm/dd/yyyy");
  }
  return dateValue;
}
