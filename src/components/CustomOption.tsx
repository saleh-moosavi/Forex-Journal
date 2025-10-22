export default function CustomOption({
  title,
  value,
  options,
  onChangeHandler,
}: {
  title: string;
  value: string;
  options?: string[];
  onChangeHandler: (e: any) => void;
}) {
  return (
    <select
      value={value}
      onChange={onChangeHandler}
      className="p-2 rounded-md w-full shrink-0"
    >
      <option disabled>{title}</option>
      {options?.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
