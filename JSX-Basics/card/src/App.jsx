import Card from "./Card";

function App() {

  const CardContent = [
    {
      heading: "This is heading 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btn: "click here",
    },
    {
      heading: "This is heading 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btn: "click here",
    },
    {
      heading: "This is heading 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btn: "click here",
    },
    {
      heading: "This is heading 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btn: "click here",
    },
  ];

  return (
    <div>
      {
        CardContent.map( (content, idx) => {
          return (
            <div key={idx}>
              <Card
                heading={content.heading}
                description={content.description}
                btn={content.btn}
              />
            </div>
          );
        })
      }
    </div>
  )
}

export default App
