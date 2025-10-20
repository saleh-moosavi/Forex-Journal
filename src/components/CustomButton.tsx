import { Link } from "react-router-dom";

export function DeleteButton({
  id,
  delHandler,
}: {
  id: string;
  delHandler: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <button
      className="bg-rose-600 hover:bg-rose-500 px-4 py-2 rounded-md transition-all duration-300"
      data-id={id}
      onClick={delHandler}
    >
      Delete
    </button>
  );
}

export function EditButton({ id }: { id: string }) {
  return (
    <Link
      className="bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-md transition-all duration-300"
      data-id={id}
      to={`/add/${id}`}
    >
      Edit
    </Link>
  );
}
