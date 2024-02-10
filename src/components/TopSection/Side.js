/**
 * Боковая секция верхней панели
 */

function Side(props) {
  const { icon, title, text, link } = props;

  return (
    <a className="Side" href={link}>
      <img src={process.env.PUBLIC_URL + icon} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </a>
  );
}

export default Side;
