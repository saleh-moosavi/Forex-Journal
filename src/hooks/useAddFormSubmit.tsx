import useSetData from "../hooks/useSetData";
import useEditData from "../hooks/useEditData";
import { useNavigate } from "react-router-dom";
import { FormEvent, useReducer, useState } from "react";
import { initialReducer, reducer } from "../utils/reducer";
import { addFormValidator } from "../utils/AddFormValidator";
import { errorType } from "../types/dataType";

export default function useAddFormSubmit({ id }: { id: string | null }) {
  const navigate = useNavigate();
  const { setData } = useSetData();
  const { editData } = useEditData();
  const [error, setError] = useState<errorType>({});
  const [data, dispatch] = useReducer(reducer, initialReducer);

  // add or edit data in localStorage after submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const response = addFormValidator(data);
    if (response.isValid) {
      id !== null ? editData(data, id) : setData(data);
      navigate("/");
    } else {
      setError(response.error);
    }
  };

  return { handleSubmit, data, error, dispatch };
}
