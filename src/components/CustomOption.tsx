export default function CustomOption({
  error,
  title,
  value,
  options,
  onChangeHandler,
}: {
  error?: string;
  title: string;
  value: string;
  options?: string[];
  onChangeHandler: (e: any) => void;
}) {
  return (
    <article>
      <select
        value={value}
        onChange={onChangeHandler}
        className="p-2 rounded-md w-full shrink-0 bg-white/20 text-white"
      >
        <option disabled>{title}</option>
        {options?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error && <p className="text-rose-400 text-xs">{error}</p>}
    </article>
  );
}
