import "./App.css";
import Tabs from "./components/Tabs/Tabs";
import Carousel from "./components/Carousel/Carousel";
import Subscribe from "./components/Subscribe/Subscribe";
import MainList from "./components/MainList/MainList";

function App() {
  return (
    <div className="App">
      <div className="max-w-6xl mx-auto">
        <Tabs />
        <Carousel />
        <Subscribe />
        <MainList />
      </div>
    </div>
  );
}

export default App;
