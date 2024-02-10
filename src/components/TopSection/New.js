/**
 * Ссылка на новость
 */

function New(props) {
  const { icon, text, link } = props;

  return (
    <li className="New">
      <img src={process.env.PUBLIC_URL + '/images/' + icon} width="20px" alt="" />
      <a href={link}>{text}</a>
    </li>
  );
}

export default New;
