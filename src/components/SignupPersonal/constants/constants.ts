// https://stackoverflow.com/a/39990702
export const phoneNumberRegex =
  /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/gm;

export const postcodeRegex = /[0-9]{3,4}/;
