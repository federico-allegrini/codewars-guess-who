const displayList = (list, key = false, symbol = "-", newLine = false) =>
  list
    .map(
      (element) =>
        ` ${symbol} ${key ? element[key] : element}${newLine ? "\n" : ""}`
    )
    .join("");
export default displayList;
