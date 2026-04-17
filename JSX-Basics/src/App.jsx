import Card from "./Card";

function App() {

  // Object array for listing all contents
  const CardContent = [
    {
      heading: "This is heading 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btn: "click here",
      status: "pending",
    },
    {
      heading: "This is heading 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btn: "click here",
      status: "active",
    },
    {
      heading: "This is heading 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btn: "click here",
      status: "cancelled",
    },
    {
      heading: "This is heading 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btn: "click here",
      status: "pending",
    },
  ];

  return (
    <div>
      { CardContent.map( (content, idx) => {
          return (
            <div key={ idx }>
              <Card
                heading={ content.heading }
                description={ content.description }
                btn={ content.btn }
                status={ content.status }
              />
            </div>
          );
        })
      }
    </div>
  )
}

export default App
