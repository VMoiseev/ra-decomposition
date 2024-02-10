/**
 * Строка примера под формой поиска
 */

function SearchExample(props) {
  const { example } = props;

  return (
    <p className="SearchExample">
      <span>Найдётся всё. Например, </span>
      <span>{example}</span>
    </p>
  );
}

export default SearchExample;
