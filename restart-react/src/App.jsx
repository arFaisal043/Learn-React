import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  // useEffect runs side effects (like API calls) after render
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://picsum.photos/v2/list");
      // console.log(response);
      console.log(response.data);
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div className="m-10">
      {/* <button
        onClick={getData}
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-500"
      >
        Get Data
      </button> */}
      <div className="border px-2 py-2 mt-5">
        {data.map((val, idx) => {
          return (
            <div key={idx}>
              <h1>
                id {val.id}: {val.author}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
