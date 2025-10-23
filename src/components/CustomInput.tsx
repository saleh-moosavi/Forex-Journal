export default function CustomInput({
  type,
  error,
  value,
  label,
  changeHandler,
}: {
  type: string;
  error?: string;
  value: string;
  label?: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <article>
      <input
        className="p-2 rounded-md shrink-0 w-full bg-white/20 text-white"
        placeholder={label ? `${label} Image URL` : ""}
        type={type}
        value={value}
        onChange={changeHandler}
      />

      {error && <p className="text-rose-400 text-xs">{error}</p>}
    </article>
  );
}
