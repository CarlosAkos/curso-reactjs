import Navbar from "./components/Navbar/Navbar";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <Navbar />
      <ItemlistContainer greetings={"Saludos Mundo"}/>
    </>
  );
}

export default App;
