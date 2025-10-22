export default function CustomInput({
  type,
  value,
  label,
  changeHandler,
}: {
  type: string;
  value: string;
  label?: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <input
        className="p-2 rounded-md shrink-0 w-full"
        placeholder={label ? `${label} Image URL` : ""}
        type={type}
        value={value}
        onChange={changeHandler}
      />
    </>
  );
}
