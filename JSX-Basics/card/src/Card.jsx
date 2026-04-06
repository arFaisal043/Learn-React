const Card = (props) => {
    const { heading, description, btn } = props;

    return (
        <div className="border m-4 p-4">
            <h1 className="text-2xl font-bold">{heading}</h1>
            <p>{description}</p>
            <button className="border px-2 bg-blue-500 hover:bg-blue-300 text-amber-50">{btn}</button>
        </div>
    )
}

export default Card;