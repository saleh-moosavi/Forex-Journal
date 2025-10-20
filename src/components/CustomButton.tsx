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
      className="bg-rose-600 px-4 py-2 rounded-md"
      data-id={id}
      onClick={delHandler}
    >
      Delete
    </button>
  );
}

export function EditButton({ id }: { id: string }) {
  return (
    <button className="bg-violet-600 px-4 py-2 rounded-md" data-id={id}>
      <Link to={`/add/${id}`}>Edit</Link>
    </button>
  );
}
