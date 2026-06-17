import { useRef } from "react";

const Card = (props) => {
  const descriptionRef = useRef(null);

  const { heading, description, btn, status } = props;

  const statusColor = {
    active: "bg-green-500",
    pending: "bg-blue-500",
    cancelled: "bg-red-500",
  };

  const handleButtonClick = () => {
    descriptionRef.current.className="text-blue-500"
  }

  return (
    <div className="border m-5 p-5 space-y-3">
      <div className="flex justify-between">
        {heading && <h1 className="text-2xl font-bold">{heading}</h1>}
        {/*statusColor[status] = statusColor.status*/}
        {status && (
          <p className={`${statusColor[status]} rounded-full px-2 border`}>
            {status}
          </p>
        )}
      </div>
      {description && (
        <p ref={descriptionRef} className="italic">
          {description}
        </p>
      )}
      {btn && (
        <button
          onClick={handleButtonClick}
          className="border px-2 py-1 bg-blue-300 hover:bg-blue-500 text-white cursor-pointer"
        >
          {btn}
        </button>
      )}
    </div>
  );
};

export default Card;