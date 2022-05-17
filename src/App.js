import Navbar from "./components/Navbar/Navbar";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetailContainer/ItemDetail";

function App() {
  return (
    <>
      <Navbar />
      <ItemlistContainer greetings={"¡Hola nuevamente!"}/>
      <ItemDetail />
    </>
  );
}

export default App;
