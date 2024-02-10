import TopSection from './TopSection';
import Search from './Search';
import Trailer from './Trailer';
import BottomSection from './BottomSection';

/**
 * Родительский компонент страницы
 */

function Yandex(props) {
  const { top, search, trailer, bottom } = props.data;

  return (
    <div className="Yandex">
      <TopSection data={top} />
      <Search data={search} />
      <Trailer data={trailer} />
      <BottomSection data={bottom} />
    </div>
  );
}

export default Yandex;
