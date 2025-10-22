import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { initialReducer } from "../utils/reducer";
import CustomInput from "../components/CustomInput";
import CustomOption from "../components/CustomOption";
import useAddFormSubmit from "../hooks/useAddFormSubmit";

interface useParamsType {
  id?: string | undefined;
}

export default function Add() {
  const { getData } = useGetData();
  const params = useParams() as useParamsType;
  const { handleData, handleSubmit, dispatch, error, data } = useAddFormSubmit({
    id: params.id ? params.id : null,
  });

  // check open page for edit or add
  useEffect(() => {
    if (params.id) {
      const data = getData(params.id);
      dispatch({ type: "params", value: data || initialReducer });
    } else {
      dispatch({ type: "reset", value: initialReducer });
    }
  }, [params.id]);

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
        <div className="grid grid-cols-2 gap-2 w-full">
          <CustomOption
            title="Result"
            value={data.result}
            options={["TP", "SL"]}
            onChangeHandler={(e) =>
              dispatch({ type: "result", value: e.target.value })
            }
          />
          <CustomOption
            title="Currency"
            value={data.currency}
            options={["EURUSD", "XAUUSD"]}
            onChangeHandler={(e) =>
              dispatch({ type: "currency", value: e.target.value })
            }
          />
          {/* time and date inputs */}
          <CustomInput
            type="date"
            value={data.date}
            changeHandler={(e) => {
              dispatch({ type: "date", value: e.target.value });
            }}
          />
          <CustomInput
            type="time"
            value={data.time}
            changeHandler={(e) => {
              dispatch({ type: "time", value: e.target.value });
            }}
          />
        </div>
        {/* images and labels input */}
        <CustomInput
          type="url"
          label="HTF Image"
          value={data.htf}
          changeHandler={(e) => {
            dispatch({ type: "htf", value: e.target.value });
          }}
        />
        <CustomInput
          type="url"
          label="MTF Image"
          value={data.mtf}
          changeHandler={(e) => {
            dispatch({ type: "mtf", value: e.target.value });
          }}
        />
        <CustomInput
          type="url"
          label="LTF Image"
          value={data.ltf}
          changeHandler={(e) => {
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
