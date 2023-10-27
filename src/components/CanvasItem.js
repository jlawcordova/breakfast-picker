export function CanvasItem({name, image}) {
  return (
    <div className="cursor-pointer w-auto rounded-md shadow-md p-8 py-2 flex items-center">
      <img className="w-24 h-24 object-contain" src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}