import "./App.css";
import MyCarosel from "./components/Carousel/MyCarosel";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App bg-indigo-400 w-full h-screen">
      <Nav></Nav>
      <MyCarosel></MyCarosel>
    </div>
  );
}

export default App;
