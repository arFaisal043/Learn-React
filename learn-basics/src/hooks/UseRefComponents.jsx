import { useRef } from "react";

const UseRefComponents = () => {
  const refText = useRef(null);
  const refInput = useRef(null);

  const click = () => {
    refInput.current.focus();
    refText.current.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  };

  return (
    <div className="m-10 p-10">
      <p className="border h-8" ref={refText}></p>
      <input ref={refInput} className="border" type="text" />
      <button onClick={click} className="border bg-blue-400 py-1 px-3">
        Click
      </button>
    </div>
  );
};

export default UseRefComponents;
