/**
 * Курсы валют, стоимость нефти
 */

function Currency(props) {
  const { usd, eur, oil } = props;

  return (
    <ul className="Currency">
      <li>
        <span>USD MOEX</span>
        <span>{usd.value}</span>
        <span>{usd.delta}</span>
      </li>
      <li>
        <span>EUR MOEX</span>
        <span>{eur.value}</span>
        <span>{eur.delta}</span>
      </li>
      <li>
        <span>Нефть</span>
        <span>{oil.value}</span>
        <span>{oil.delta}</span>
      </li>
      <li>
        <a href=".">...</a>
      </li>
    </ul>
  );
}

export default Currency;
