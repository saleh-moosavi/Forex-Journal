import useSetData from "../hooks/useSetData";
import useEditData from "../hooks/useEditData";
import { useNavigate } from "react-router-dom";
import { FormEvent, useReducer, useState } from "react";
import { initialReducer, reducer } from "../utils/reducer";
import { addFormValidator } from "../utils/AddFormValidator";

export default function useAddFormSubmit({ id }: { id: string | null }) {
  const navigator = useNavigate();
  const { setData } = useSetData();
  const { editData } = useEditData();
  const [error, setError] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialReducer);

  // add or edit data in localStorage after submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValid = addFormValidator(data);
    if (isValid) {
      id !== null ? editData(data, id) : setData(data);
      setError(false);
      navigator("/");
    } else {
      setError(true);
    }
  };

  return { handleSubmit, data, error, dispatch };
}
