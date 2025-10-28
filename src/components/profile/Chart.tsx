import { analyzedDataType } from "../../types/dataType";

export default function Chart({ data }: { data: analyzedDataType | null }) {
  console.log(data);
  return (
    <div className="flex justify-center items-center overflow-hidden">
      chart
    </div>
  );
}
