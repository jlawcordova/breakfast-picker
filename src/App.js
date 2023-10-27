import Canvas from "./components/Canvas.js";
import Drawer from "./components/Drawer.js";

function App() {
  // These are all available items.
  // Do not modify these.
  const availableItems = [
    {
      id: 0,
      image: "/coffee.png",
      name: "Coffee",
    },
    {
      id: 1,
      image: "/oats.png",
      name: "Oats",
    },
    {
      id: 2,
      image: "/fruits.png",
      name: "Fruits",
    },
  ];


  // This function is triggered when an item in the drawer is clicked.
  // The parameter is the item that was clicked.
  function DrawerItemClick(item) {
  }

  return (
    <div>
      <h1 className="text-2xl text-center my-8">Breakfast Picker</h1>
      <Drawer items={availableItems} onItemClick={DrawerItemClick}></Drawer>
      <Canvas></Canvas>
    </div>
  );
}

export default App;
