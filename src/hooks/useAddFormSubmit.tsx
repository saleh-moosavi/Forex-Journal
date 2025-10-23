import toastContext from "../context/Toast";
import useSetData from "../hooks/useSetData";
import { errorType } from "../types/dataType";
import useEditData from "../hooks/useEditData";
import { useNavigate } from "react-router-dom";
import { initialReducer, reducer } from "../utils/reducer";
import { addFormValidator } from "../utils/AddFormValidator";
import { FormEvent, useContext, useReducer, useState } from "react";

export default function useAddFormSubmit({ id }: { id: string | null }) {
  const navigate = useNavigate();
  const { setData } = useSetData();
  const { editData } = useEditData();
  const { setToast } = useContext(toastContext);
  const [error, setError] = useState<errorType>({});
  const [data, dispatch] = useReducer(reducer, initialReducer);

  // add or edit data in localStorage after submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const response = addFormValidator(data);
    if (response.isValid) {
      id !== null ? editData(data, id) : setData(data);
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
