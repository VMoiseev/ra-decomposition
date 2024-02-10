/**
 * Верхнее меню новостей, второй пункт точно должен быть настраиваемым
 */

function Menu(props) {
  const { text, link } = props;

  return (
    <ul className="Menu">
      <li>
        <a href=".">Сейчас в СМИ</a>
      </li>
      <li>
        <a href={link}>{text}</a>
      </li>
      <li>
        <a href="https://yandex.ru">Рекомендуем</a>
      </li>
    </ul>
  );
}

export default Menu;
