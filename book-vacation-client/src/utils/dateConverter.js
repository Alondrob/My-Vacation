export const dateConverter = (strDate) => {
  console.log(strDate);
  const dateArr = strDate?.split("-");
  console.log(dateArr[2].charAt(0));
  const dayOne = dateArr != null || undefined ? dateArr[2].charAt(0) : "";
  const dayTwo = dateArr != null || undefined ? dateArr[2].charAt(1) : "";
  return (dateArr[1] + "-" + dayOne + dayTwo + "-" + dateArr[0]);
};
