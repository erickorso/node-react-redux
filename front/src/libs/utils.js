export const getHumanDate = date => {
  let humanDate = new Date(date);
  return humanDate.toDateString();
};

export const formatMoney = value => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return formatter.format(value);
};
