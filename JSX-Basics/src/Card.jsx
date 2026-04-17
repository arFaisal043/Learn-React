const Card = (props) => {
    const { heading, description, btn, status } = props;

    const statusColor = {
      active: "bg-green-500",
      pending: "bg-blue-500",
      cancelled: "bg-red-500"
    };


    return (
      <div className="border m-4 p-4 w-150">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{heading}</h1>
          <p className={`${statusColor[status]} rounded-full px-2 text-white`}>{status}</p>
        </div>
        <p>{description}</p>
        <button className="border px-2 py-1  bg-blue-500 hover:bg-blue-300 text-amber-50">
          {btn}
        </button>
      </div>
    );
}

export default Card;