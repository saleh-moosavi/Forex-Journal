import useSetData from "../hooks/useSetData";
import useEditData from "../hooks/useEditData";
import { useNavigate } from "react-router-dom";
import { FormEvent, useReducer, useState } from "react";
import { initialReducer, reducer } from "../utils/reducer";

export default function useAddFormSubmit({ id }: { id: string | null }) {
  const navigator = useNavigate();
  const { setData } = useSetData();
  const { editData } = useEditData();
  const [error, setError] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialReducer);

  // add data in localStorage after submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      data.time != "" &&
      data.date != "" &&
      data.htf != "" &&
      data.mtf != "" &&
      data.ltf != "" &&
      data.result != "Result" &&
      data.currency != "Currency" &&
      data.desc != ""
    ) {
      setError(false);
      setData(data);
      navigator("/");
    } else {
      setError(true);
    }
  };

  // edit data in localStorage after submit
  const handleData = (e: FormEvent) => {
    e.preventDefault();
    if (
      data.time != "" &&
      data.date != "" &&
      data.htf != "" &&
      data.mtf != "" &&
      data.ltf != "" &&
      data.result != "Result" &&
      data.currency != "Currency" &&
      data.desc != ""
    ) {
      editData(data, id!);
      setError(false);
      navigator("/");
    } else {
      setError(true);
    }
  };
  return { handleSubmit, handleData, data, error, dispatch };
}
