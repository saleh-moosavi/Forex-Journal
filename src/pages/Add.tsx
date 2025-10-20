import useGetData from "../hooks/useGetData";
import useSetData from "../hooks/useSetData";
import useEditData from "../hooks/useEditData";
import { useNavigate, useParams } from "react-router-dom";
import { initialReducer, reducer } from "../utils/reducer";
import { FormEvent, useEffect, useReducer, useState } from "react";

interface useParamsType {
  id?: string | undefined;
}

export default function Add() {
  const navigator = useNavigate();
  const { getData } = useGetData();
  const { setData } = useSetData();
  const { editData } = useEditData();
  const [error, setError] = useState(false);
  const params = useParams() as useParamsType;
  const [data, dispatch] = useReducer(reducer, initialReducer);

  // check open page for edit or add
  useEffect(() => {
    if (params.id) {
      const data = getData(params.id);
      dispatch({ type: "params", value: data || initialReducer });
    } else {
      dispatch({ type: "reset", value: initialReducer });
    }
  }, [params.id]);

  // add data in localStorage after submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      data.time != "" &&
      data.date != "" &&
      data.htf != "" &&
      data.mtf != "" &&
      data.ltf != "" &&
      data.result != "Result" &&
      data.currency != "Currency" &&
      data.desc != ""
    ) {
      setError(false);
      setData(data);
      navigator("/");
    } else {
      setError(true);
    }
  };

  // edit data in localStorage after submit
  const handleData = (e: FormEvent) => {
    e.preventDefault();
    if (
      data.time != "" &&
      data.date != "" &&
      data.htf != "" &&
      data.mtf != "" &&
      data.ltf != "" &&
      data.result != "Result" &&
      data.currency != "Currency" &&
      data.desc != ""
    ) {
      editData(data, params.id!);
      setError(false);
      navigator("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => (params.id ? handleData(e) : handleSubmit(e))}
        className="flex flex-col w-1/2 lg:w-1/3 gap-y-1 text-xs p-5 backdrop-blur-sm bg-white/20 rounded-lg shadow-white/40 shadow-md"
      >
        {error && (
          <p className="text-rose-500 font-bold text-lg text-center mb-3">
            Please Complete All Fields
          </p>
        )}
        {/* Result and Currency inputs */}
        <div className="flex gap-x-2 w-full">
          <select
            className="p-2 rounded-md w-1/2 shrink-0"
            value={data.result}
            onChange={(e) =>
              dispatch({ type: "result", value: e.target.value })
            }
          >
            <option value="Result">Result</option>
            <option value="TP">TP</option>
            <option value="SL">SL</option>
          </select>

          <select
            className="p-2 rounded-md w-1/2 shrink-0"
            value={data.currency}
            onChange={(e) =>
              dispatch({ type: "currency", value: e.target.value })
            }
          >
            <option value="Currency">Currency</option>
            <option value="EURUSD">EURUSD</option>
            <option value="XAUUSD">XAUUSD</option>
          </select>
        </div>
        {/* time and date inputs */}
        <div className="flex gap-x-2 w-full">
          <input
            className="p-2 rounded-md w-1/2 shrink-0"
            type="date"
            value={data.date}
            onChange={(e) => {
              dispatch({ type: "date", value: e.target.value });
            }}
          />
          <input
            className="p-2 rounded-md w-1/2 shrink-0"
            type="time"
            value={data.time}
            onChange={(e) => {
              dispatch({ type: "time", value: e.target.value });
            }}
          />
        </div>
        {/* images and labels input */}
        <label className="text-white font-semibold">HTF image</label>
        <input
          className="p-2 rounded-md"
          type="url"
          value={data.htf}
          onChange={(e) => {
            dispatch({ type: "htf", value: e.target.value });
          }}
        />
        <label className="text-white font-semibold">MTF image</label>
        <input
          className="p-2 rounded-md"
          type="url"
          value={data.mtf}
          onChange={(e) => {
            dispatch({ type: "mtf", value: e.target.value });
          }}
        />
        <label className="text-white font-semibold">LTF image</label>
        <input
          className="p-2 rounded-md"
          type="url"
          value={data.ltf}
          onChange={(e) => {
            dispatch({ type: "ltf", value: e.target.value });
          }}
        />
        {/* textarea input */}
        <label className="text-white font-semibold">Description</label>
        <textarea
          className="p-2 rounded-md"
          rows={6}
          value={data.desc}
          onChange={(e) => {
            dispatch({ type: "desc", value: e.target.value });
          }}
        ></textarea>
        <button
          type="submit"
          className={`p-2 w-full bg-gradient-to-r ${
            params.id
              ? "from-yellow-400  to-yellow-700"
              : "from-green-400  to-green-700"
          } rounded-md`}
        >
          {params.id ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}
