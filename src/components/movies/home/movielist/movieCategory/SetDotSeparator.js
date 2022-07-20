import { setCategory } from "./MovieCategory";

export function setDotInterval(dataIds, type) {
  let dataIdsArray = [];
  if (type === "id") {
    dataIds.forEach((data) => dataIdsArray.push(setCategory(data)));
  } else if (type === "name") {
    dataIds.forEach((data) => dataIdsArray.push(data.name));
  }
  return dataIdsArray.join(" • ");
}
