export const getDaysArray = function (starting, ending) {
  for (
    var a = [], d = new Date(starting);
    d <= new Date(ending);
    d.setDate(d.getDate() + 1)
  ) {
    a.push(new Date(d).getDate() + "/" + (new Date(d).getUTCMonth() + 1));
  }
  return a;
};
