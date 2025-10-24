import useData from "./useData";
import toastContext from "../context/Toast";
import { errorType } from "../types/dataType";
import { useNavigate } from "react-router-dom";
import { initialReducer, reducer } from "../utils/reducer";
import { addFormValidator } from "../utils/AddFormValidator";
import { FormEvent, useContext, useReducer, useState } from "react";

export default function useAddFormSubmit({ id }: { id: number | null }) {
  const navigate = useNavigate();
  const { setData, editData } = useData();
  const { setToast } = useContext(toastContext);
  const [error, setError] = useState<errorType>({});
  const [data, dispatch] = useReducer(reducer, initialReducer);

  // add or edit data in localStorage after submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const response = addFormValidator(data);
    if (response.isValid) {
      id !== null ? editData(id, data) : setData(data);
      setToast({
        isVisible: true,
        text: `Item ${id !== null ? "Editted" : "Added"} Successfully`,
        color: "bg-blue-600",
      });
      navigate("/");
    } else {
      setToast({
        isVisible: true,
        text: `Something Went Wrong`,
        color: "bg-rose-500",
      });
      setError(response.error);
    }
  };

  return { handleSubmit, data, error, dispatch };
}
