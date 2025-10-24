import { Link } from "react-router-dom";
import useData from "../hooks/useData";

export function DeleteButton({ id }: { id: number }) {
  const { deleteData } = useData();
  const deleteHandler = () => {
    if (confirm(`Are You Sure ??`)) {
      deleteData(id);
    }
  };
  return (
    <button
      className="bg-rose-700 hover:bg-rose-500 px-4 py-2 rounded-md transition-all duration-300"
      data-id={id}
      onClick={deleteHandler}
    >
      Delete
    </button>
  );
}

export function EditButton({ id }: { id: number }) {
  return (
    <Link
      className="bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded-md transition-all duration-300"
      data-id={id}
      to={`/add/${id}`}
    >
      Edit
    </Link>
  );
}
