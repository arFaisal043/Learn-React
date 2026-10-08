const Card = (props) => {
    const { image, title, description, github, link } = props;
    return (
      <div className="max-w-sm border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition m-4">
        <img
          className="h-48 w-full object-cover"
          src={image}
          alt={title}
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-800">
            {title}
          </h1>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <div className="flex gap-4 mt-3 text-sm text-blue-600">
            <a href={github} className="hover:underline">
              Github
            </a>
            <a href={link} className="hover:underline">
              Link
            </a>
          </div>
        </div>
      </div>
    );
};

export default Card;