import { MouseEvent } from "react";
import { dataType } from "../types/dataType";

export const deleteItem = (
  e: MouseEvent<HTMLElement>,
  data: dataType[]
): dataType[] => {
  const newData = [...data];
  newData.splice(Number((e.target as HTMLElement).dataset.id), 1);
  return newData;
};
