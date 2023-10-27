export function CanvasItem() {
  return (
    <div className="cursor-pointer w-auto rounded-md shadow-md p-8 py-2 flex items-center">
      <img
        className=" w-24 h-24 object-contain"
        src={"/coffee.png"}
        alt={"Sample Item"}
      />
      <h2>{"Sample Item"}</h2>
    </div>
  );
}