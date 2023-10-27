export default function Item({
  id,
  image,
  name,
  onClick
}) {
  function onDivClick() {
    onClick({
      id,
      image,
      name
    });
  }
    
  return (
    <div className="cursor-pointer w-auto rounded-md shadow-md p-8" onClick={onDivClick}>
      <h2>{name}</h2>
      <img className=" w-24 h-24 object-contain" src={image} alt={name}/>
    </div>
  );
}
