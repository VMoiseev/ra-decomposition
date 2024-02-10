/**
 * Реклама под формой поиска в виде баннера
 */

function Trailer(props) {
  const { img, link } = props.data;

  return (
    <div className="Trailer">
      <a href={link}>
        <img src={process.env.PUBLIC_URL + './images/' + img} width="800px" alt="trailer" />
      </a>
    </div>
  );
}

export default Trailer;
