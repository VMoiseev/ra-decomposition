const data = {
  top: {
    location: {
      text: 'В Германии',
      link: 'https://ru.wikipedia.org/wiki/Германия'
    },
    news: [
      {
        text: 'Путин упростил получение автомобильных номеров',
        link: '.'
      },
      {
        text: 'В команде Зеленского раскрыли план реформ на Украине',
        link: '.'
      },
      {
        text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
        link: '.'
      },
      {
        text: 'Суд закрыл дело Демпартии США против России',
        link: '.'
      },
      {
        text: 'На Украине призвали создать ракеты для удара по Москве',
        link: '.'
      }
    ],
    currency: {
      usd: {
        value: '74.17',
        delta: '+0.28'
      },
      eur: {
        value: '70.86',
        delta: '+0.14'
      },
      oil: {
        value: '64.90',
        delta: '+1.63%'
      }
    },
    side: {
      title: 'Работа над ошибками',
      text: 'Смотрите в Яндексе и запоминайте',
      link: '.'
    }
  },
  search: {
    example: 'фаза луны сегодня'
  },
  trailer: {
    img: 'movie.png',
    link: '.'
  },
  bottom: [
    {
      title: 'Погода',
      link: '.',
      content: (
        <div>
          <img src={process.env.PUBLIC_URL + '/images/'} width="50px" alt="" />
          <p>+17</p>
          <div>
            <p>Утром +17,</p>
            <p>днём +20</p>
          </div>
        </div>
      )
    },
    {
      title: 'Посещаемое',
      link: '.',
      content: (
        <div>
          <p>Здесь свой контент</p>
        </div>
      )
    },
    {
      title: 'Карта Германии',
      link: '.',
      content: (
        <div>
          <p>И здесь свой контент</p>
        </div>
      )
    },
    {
      title: 'Телепрограмма',
      link: '.',
      content: (
        <div>
          <p>И здесь...</p>
        </div>
      )
    },
    {
      title: 'Эфир',
      link: '.',
      content: (
        <div>
          <p>И здесь тоже</p>
        </div>
      )
    }
  ]
}


export default data;