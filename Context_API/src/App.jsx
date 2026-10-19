import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import { DataContext } from "./Context/UserContext";

const App = () => {

  // Step 3. Consume the Context Value
  const data = useContext(DataContext);
  console.log(data);

  return (
    <div>
      <h1>Learning Context API</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default App;