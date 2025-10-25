import { CustomInputProps } from "../types/dataType";

export default function CustomInput({
  type,
  error,
  value,
  changeHandler,
}: CustomInputProps) {
  return (
    <article>
      <input
        type={type}
        value={value}
        onChange={changeHandler}
        className="p-2 rounded-md shrink-0 w-full bg-white/20 text-white"
      />

      {error && <p className="text-rose-400 text-xs">{error}</p>}
    </article>
  );
}
