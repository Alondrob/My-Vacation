export const dateConverter = (strDate) => {
  const dateArr = strDate.split("-");
  const dayOne = dateArr[2].charAt(0);
  const dayTwo = dateArr[2].charAt(1);
  return dateArr[1] + "-" + dayOne + dayTwo + "-" + dateArr[0];
};
