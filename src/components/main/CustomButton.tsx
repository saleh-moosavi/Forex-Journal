import { useContext } from "react";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import { PopUpContext } from "../../context/PopUpContext";

export function DeleteButton({ id }: { id: number }) {
  const { deleteData } = useData();
  const { setIsVisible, setMessage, setResolver } = useContext(PopUpContext);

  const deleteHandler = () => {
    setMessage("Are you sure you want to delete this item?");
    setIsVisible(true);

    // ✅ Wrap deleteData(id) inside a function so it’s called *after* confirmation
    setResolver(() => () => deleteData(id));
  };

  return (
    <button
      className="bg-rose-700 hover:bg-rose-500 px-4 py-2 rounded-md transition-all duration-300"
      onClick={deleteHandler}
    >
      Delete
    </button>
  );
}

export function EditButton({ id }: { id: number }) {
  return (
    <Link
      to={`/add/${id}`}
      className="bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded-md transition-all duration-300"
    >
      Edit
    </Link>
  );
}
