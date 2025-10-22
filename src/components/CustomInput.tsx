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
      {label && <label className="text-white font-semibold">{label}</label>}
      <input
        className="p-2 rounded-md shrink-0 w-full"
        type={type}
        value={value}
        onChange={() => {
          changeHandler;
        }}
      />
    </>
  );
}
