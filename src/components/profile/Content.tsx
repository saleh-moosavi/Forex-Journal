import { analyzedDataType } from "../../types/dataType";

export default function Content({ data }: { data: analyzedDataType | null }) {
  return (
    <div className="rounded-lg overflow-hidden m-5">
      <table className="min-w-full border border-white/10 text-white text-sm h-full mt-auto">
        <tbody>
          {[
            ["All Trades", data?.dataCount],
            ["TP Trades", data?.tpCount],
            ["SL Trades", data?.slCount],
            ["Win Rate", data?.winRate, " %"],
            ["Lose Trades", data?.loseRate, " %"],
            ["EURUSD Trades", data?.EuroTrade],
            ["XAUUSD Trades", data?.GoldTrade],
          ].map(([label, value, afterText], i) => (
            <tr
              key={label}
              className={i % 2 === 0 ? "bg-white/10" : "bg-white/5"}
            >
              <td className="px-4 py-2 font-medium">{label}</td>
              <td className="px-4 py-2 text-right">
                {value ?? "-"}
                {afterText}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
