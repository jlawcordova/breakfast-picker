export function CanvasItem({name, image}) {
  return (
    <div className="cursor-pointer rounded-md shadow-md p-8 py-2 flex items-center w-96">
      <img className="w-24 h-24 object-contain" src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}