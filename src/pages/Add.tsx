import { useEffect } from "react";
import useData from "../hooks/useData";
import { useParams } from "react-router-dom";
import { initialReducer } from "../utils/reducer";
import ImageInput from "../components/ImageInput";
import CustomInput from "../components/CustomInput";
import CustomOption from "../components/CustomOption";
import useAddFormSubmit from "../hooks/useAddFormSubmit";

interface useParamsType {
  id?: string | undefined;
}

export default function Add() {
  const { getData } = useData();
  const params = useParams() as useParamsType;
  const { handleSubmit, dispatch, error, data } = useAddFormSubmit({
    id: params.id ? parseInt(params.id) : null,
  });

  // check open page for edit or add
  useEffect(() => {
    if (params.id) {
      getData(parseInt(params.id)).then((data) => {
        dispatch({ type: "params", value: data || initialReducer });
      });
    } else {
      dispatch({ type: "reset", value: initialReducer });
    }
  }, [params.id]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-1/2 lg:w-1/3 gap-y-2 text-xs md:text-sm p-5 backdrop-blur-md rounded-xl shadow shadow-white"
      >
        <h2 className="text-center text-white text-xl font-bold mb-5">
          Add New Trade Journal
        </h2>
        {/* Result and Currency inputs */}
        <div className="grid grid-cols-2 gap-2 w-full">
          <CustomOption
            error={error.result}
            title="Result"
            value={data.result}
            options={["TP", "SL"]}
            onChangeHandler={(e) =>
              dispatch({ type: "result", value: e.target.value })
            }
          />
          <CustomOption
            error={error?.currency}
            title="Currency"
            value={data.currency}
            options={["EURUSD", "XAUUSD"]}
            onChangeHandler={(e) =>
              dispatch({ type: "currency", value: e.target.value })
            }
          />
          {/* time and date inputs */}
          <CustomInput
            error={error.date}
            type="date"
            value={data.date}
            changeHandler={(e) => {
              dispatch({ type: "date", value: e.target.value });
            }}
          />
          <CustomInput
            error={error.time}
            type="time"
            value={data.time}
            changeHandler={(e) => {
              dispatch({ type: "time", value: e.target.value });
            }}
          />
        </div>
        {/* images and labels input */}
        <ImageInput
          error={error.image}
          value={data.images}
          changeHandler={(file) => {
            dispatch({ type: "image", value: file });
          }}
        />
        {/* textarea input */}
        <article>
          <textarea
            className="p-2 w-full rounded-md bg-white/20 text-white"
            rows={3}
            value={data.desc}
            placeholder="Description"
            onChange={(e) => {
              dispatch({ type: "desc", value: e.target.value });
            }}
          ></textarea>

          {error.desc && <p className="text-rose-400 text-xs">{error.desc}</p>}
        </article>

        <button
          type="submit"
          className="p-2 w-full font-bold text-base text-white bg-gradient-to-r from-blue-700 to-purple-700 hover:translate-y-1 transition-all duration-300 rounded-md"
        >
          {params.id ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}
