import Item from "./Item.js"

export default function Drawer({items, onItemClick}) {
  return (
    <div className="p-8 m-8 w-auto shadow-xl rounded-xl">
      <h1 className="mb-8 text-xl">Choose your breakfast:</h1>
      <div className="flex justify-center gap-2 ">
        {items.map((i) => (
          <Item
            key={i.id}
            id={i.id}
            name={i.name}
            image={i.image}
            onClick={onItemClick}
          ></Item>
        ))}
      </div>
    </div>
  );
}
