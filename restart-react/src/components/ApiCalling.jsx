import axios from "axios";
import { useEffect, useState } from "react";

const ApiCalling = () => {
  const [data, setData] = useState([]);

  // -- without use effect
    const getData = async () => {
      const response = await axios.get("https://picsum.photos/v2/list");
      // const data = response.data;
      console.log(response.data);
      setData(response.data);
    };

  // -- with use effect - no need to use button
//   useEffect(() => {
//     const getData = async () => {
//       const response = await axios.get("https://picsum.photos/v2/list");
//       // const data = response.data;
//       console.log(response.data);
//       setData(response.data);
//     };

//     getData();
//   }, []);

  return (
    <div className="m-10">
      <div className="">
        <button
          onClick={getData}
          className="bg-red-600 w-full px-3 py-1 text-white rounded"
        >
          Get Data
        </button>
      </div>
      {data.map((val, idx) => {
        return (
          <div className="bg-sky-300 text-black mt-0.5" key={idx}>
            <h1 className="text-center">{val.author}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default ApiCalling;
