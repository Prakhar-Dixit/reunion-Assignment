const Card = (props) => {
  const { name, price, address, imgId, popular } = props?.data;

  const { beds, bathrooms, area } = props?.data?.info;
  return (
    <div className="card">
      {popular ? <span className="popular">popular</span> : null}
      <img src={`../assets/${imgId}.avif`} alt="" />
      <div className="price">${price + "/month"}</div>
      <h2 className="name">{name}</h2>
      <p>{address}</p>
      <hr />
      <span className="info">{beds} beds</span>
      <span className="info">{bathrooms} bathrooms</span>
      <span className="info">
        {" "}
        {area} m<sup>2</sup>
      </span>
    </div>
  );
};
export default Card;
