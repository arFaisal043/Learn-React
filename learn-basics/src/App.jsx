import Card from "./Card";

function App() {
  const CardContent = [
    {
      heading: "Learning React JS",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore harum beatae labore cum enim velit unde vel asperiores? Laborum, beatae?",
      btn: "click here",
      status: "active"
    },
    {
      heading: "Learning PostgreSQL",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore harum beatae labore cum enim velit unde vel asperiores? Laborum, beatae?",
      btn: "click here",
      status: "pending"
    },
    {
      heading: "Learning Node JS",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore harum beatae labore cum enim velit unde vel asperiores? Laborum, beatae?",
      btn: "click here",
      status: "cancelled"
    },
    {
      heading: "Learning TypeScript",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore harum beatae labore cum enim velit unde vel asperiores? Laborum, beatae?",
      btn: "click here",
      status: "active"
    },
  ];

  return (
    <div>
      {CardContent.map((content, idx) => {
        return (
          <div key={idx}>
            <Card
              heading={content?.heading}
              description={content?.description}
              btn={content?.btn}
              status={content?.status}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
