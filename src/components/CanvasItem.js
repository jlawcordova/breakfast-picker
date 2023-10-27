export function CanvasItem({name, image}) {
  return (
    <div className="cursor-pointer rounded-md shadow-md p-8 py-2 flex items-center w-64">
      <img className="w-24 h-24 object-contain" src={image} alt={name} />
      <h2 className="ml-8">{name}</h2>
    </div>
  );
}