import { analyzedDataType } from "../../types/dataType";
import {
  Bar,
  XAxis,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data }: { data: analyzedDataType | null }) {
  const resultOption = [
    { name: "All Trades", value: data?.dataCount },
    { name: "TP", value: data?.tpCount },
    { name: "SL", value: data?.slCount },
  ];

  const currencyOption = [
    { name: "All Trades", value: data?.dataCount },
    { name: "EURUSD", value: data?.EuroTrade },
    { name: "XAUUSD", value: data?.GoldTrade },
  ];

  return (
    <div className="p-5 rounded-lg grid gap-10 text-xs font-semibold">
      {/* Chart 1 */}
      <div className="max-w-96 h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={resultOption}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555fff" />
            <XAxis dataKey="name" stroke="#ccc" />
            <Bar dataKey="value" fill="#564fe4" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 2 */}
      <div className="max-w-96 h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={currencyOption}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555fff" />
            <XAxis dataKey="name" stroke="#ccc" />
            <Bar dataKey="value" fill="#564fe4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
