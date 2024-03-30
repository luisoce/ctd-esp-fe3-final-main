import Card from "../Components/Card";

const Favs = () => {
  const favsList = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favsList.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Favs;
