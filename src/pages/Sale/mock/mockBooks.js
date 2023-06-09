const mockBooks = [
  {
    id: 15,
    price: 5500,
    title: "Библиография Азии.",
    description: "указатель книг и статей об Азии на русском языке и однех только книг на иностранных языках, касающихся отношений России к азиатским государствам. 2-я серия. Том 1. СПб, Тип. В. Безобразова и К° 1891г. [2], II, II, 230 с Мягкая издательская обложка., Энциклопедический формат.",
    author: "Межов В. И.",
    city: "Санкт-Петербург.",
    genres: [
      {
        id: 3,
        title: "Научно популярный"
      },
      {
        id: 6,
        title: "Учебная, справочная литература"
      },
    ],
    images: ["16870738446630.jpg", "16870738449087.jpg"],
    dateWriting: "1923 г",
    seller: {
      name: "ООО Бухгалтерия",
      id: 1,
      type: 3
    },
    typeProduct: 1,
    rating: 2,
    isOwnProduct: true,
    withPay: true,
  },
  {
    id: 13,
    price: 20000,
    title: "Русская промышленность в 1922 году.",
    description: "Материалы к 10-му съезду Советов). Петроград Редакционно-Издательский Отдел 1922г. CIX, 444 с. современный полукожаный переплет, увеличенный формат.",
    // author: "Gwendoline Butler (Гвендолин Батлер)",
    city: "Ближнее Подмосковье.",
    genres: [
      {
        id: 2,
        title: "История"
      },
      {
        id: 5,
        title: "Антиквариат"
      },
    ],
    images: ["IMG_7861.JPG", "IMG_7862.JPG", "IMG_7863.JPG", "IMG_7864.JPG"],
    dateWriting: "1967 г",
    seller: {
      name: "ООО Книжный дом",
      id: 2,
      type: 3
    },
    typeProduct: 1,
    rating: 1
  },
  {
    id: 2,
    price: 200000,
    title: "Император Александр I. Его жизнь и царствование. Н.К. Шильдер 1897 - 1898 гг.",
    description: "Раритет",
    author: "Н.К. Шильдер",
    genres: [
      {
        id: 2,
        title: "История"
      },
      {
        id: 5,
        title: "Антиквариат"
      },
    ],
    images: ["l114365_1.jpg"],
    seller: {
      name: "ЮЛ Книга.РУ",
      id: 4,
      type: 1
    },
    typeProduct: 1,
    rating: 8,
    avatar: "123123132.jfif",
    isOwnProduct: true,
    withPay: true,
  },
  {
    id: 9,
    price: 110000,
    title: "Тринадцать книг из серии Русские путешественники",
    description: "Древнегреческие рукописи. Тринадцать книг в трех цельнокожаных футлярах с удобным хранением и выниманием. Золотое тиснение с названиями произведений на каждом футляре. Бархатная подложка. Дорогое подарочное оформление. Состояние всех книг отличное. Формат: 23x16,5x15,5 см.",
    genres: [
      {
        id: 6,
        title: "Учебная, справочная литература"
      },
      {
        id: 8,
        title: "Путешествия и география"
      }
    ],
    images: ["114273_preview.jpg"],
    dateWriting: "1946-1948 гг",
    seller: {
      name: "Ч Копчигин О.Ю.",
      id: 5,
      type: 2
    },
    typeProduct: 1,
    rating: 4,
    isOwnProduct: true,
    withPay: true,
  },
  {
    id: 3,
    price: 50000,
    title: "О дворянстве. [Жалованная грамота] (Утерянная)",
    author: "",
    genres: [
      {
        id: 2,
        title: "История"
      },
      {
        id: 5,
        title: "Антиквариат"
      },
    ],
    images: ["l114363_1.jpg"],
    seller: {
      name: "Смирнов Б.В.",
      id: 6,
      type: 2
    },
    typeProduct: 1,
    rating: 6,
    avatar: "Без названия.jfif",
    isOwnProduct: true,
  },
  {
    id: 4,
    price: 350000,
    title: "(утерянная) История русской словесности с древнейших  времен до наших дней. В трех томах.",
    author: "П.Н.Полевой",
    genres: [
      {
        id: 4,
        title: "Художественная литература"
      },
      {
        id: 7,
        title: "Наука и техника"
      }
    ],
    images: ["l114354_1.jpg"],
    dateWriting: "1903 г",
    seller: {
      name: "ООО Книжный двор",
      id: 7,
      type: 3
    },
    typeProduct: 1,
    rating: 0.5,
    avatar: "thumb_20140128010209216.jpg",
    isOwnProduct: true,
  },
  {
    id: 5,
    price: 150000,
    title: "Записки о уженье рыбы.",
    author: "С.Т. Аксаков",
    genres: [
      {
        id: 3,
        title: "Научно популярный"
      },
      {
        id: 4,
        title: "Художественная литература"
      },
      {
        id: 9,
        title: "Искусство"
      },
    ],
    dateWriting: "1886 г",
    seller: {
      name: "ЮЛ Книжный",
      id: 3,
      type: 3
    },
    typeProduct: 1,
    rating: 3.4
  },
  {
    id: 6,
    price: 110000,
    title: "Полное собрание сочинений Л.Н.Толстого в двадцати томах",
    description: "Экземпляр в оригинальных издательских цельноколенкоровых переплётах с золотым тиснением на корешке. (самая дорогая, самая выгодная, такой нигде не найти)",
    author: "",
    genres: [
      {
        id: 2,
        title: "История"
      },
    ],
    images: "",
    dateWriting: "1912-1913 гг",
    seller: {
      name: "Ч Копчигин О.Ю.",
      id: 5,
      type: 2
    },
    typeProduct: 1,
    rating: 8
  },
  {
    id: 7,
    price: 40000,
    title: "Плавания Баренца 1594-1597 г.. ",
    description: "В издательском коленкоровом переплете с суперобложкой. Состояние отличное. 1 л. фронт., 308 стр, ил., карт. Формат 21,5×16 см.\n" +
      "Перевод с латинского А.И.Малеина. Переплет, форзац и графическое оформление художника М.А.Таранова. Множество иллюстраций в тексте и на вклейках, в конце — карта плаваний Баренца.",
    author: "Г. Де Фер",
    genres: [
      {
        id: 3,
        title: "Научно популярный"
      },
      {
        id: 4,
        title: "Художественная литература"
      },
      {
        id: 5,
        title: "Антиквариат"
      },
      {
        id: 6,
        title: "Учебная, справочная литература"
      },
      {
        id: 7,
        title: "Наука и техника"
      },
    ],
    images: ["l114350_1.jpg"],
    dateWriting: "1936 г",
    seller: {
      name: "ООО Бухгалтерия",
      id: 1,
      type: 3
    },
    typeProduct: 1,
    rating: 10
  },
  {
    id: 8,
    price: 135000,
    title: "Путешествия и приключения на суше на море и в воздухе. Вокруг света за 1928 г. № 1-24. [Полный годовой комплект].",
    description: "Первая публикация знаменитого фантастического романа А.Беляева «Человек-амфибия».\n" +
      "Полный комплект всех номеров \"Вокруг света\" за 1928 год (24 номера). В красивом цельнокожаном переплете с художественным золотым и конгревным тиснением. Большой формат: 30,5х23 см. Богато иллюстрированное издание с многочисленными рисунками в тексте.",
    author: "А.Беляева",
    genres: [
      {
        id: 8,
        title: "Путешествия и география"
      },
      {
        id: 9,
        title: "Искусство"
      },
      {
        id: 10,
        title: "Промышленный"
      },
    ],
    images: ["l114331_1.jpg"],
    dateWriting: "1928 г",
    seller: {
      name: "ЮЛ Книга.РУ",
      id: 4,
      type: 1
    },
    typeProduct: 1,
    rating: 3.4
  },
  {
    id: 1,
    price: 350000,
    description: "Книги в двух издательских полукожаных переплетах с золотым тиснением. Экземпляр на особой бумаге с \"большой\" короной на корешке. Золотой обрез. Формат: 30х22 см.. С 53 портретами и иллюстрациями. Отличная сохранность.",
    title: "Император Александр II. Его жизнь и царствование",
    author: "С.С. Татищев",
    genres: [
      {
        id: 3,
        title: "Научно популярный"
      },
      {
        id: 4,
        title: "Художественная литература"
      },
      {
        id: 5,
        title: "Антиквариат"
      },
    ],
    images: ["l114366_1.jpg"],
    seller: {
      name: "Ч Копчигин О.Ю.",
      id: 5,
      type: 2
    },
    typeProduct: 2,
    rating: 3.4,
    avatar: "j--uNscezS8.jpg",
  },

  {
    id: 10,
    price: 350000,
    title: "Градостроительство.",
    description: "Под редакцией В. Шкварикова. [1], 327 стр, 368 планов, схем и ил. в тексте и на вклейках. Размер книги: 26,3×20,6х3 см. В издательском иллюстрированном переплете. В очень хорошем состоянии.\n" +
      "Монография представляет собой первый капитальный труд, обобщающий развитие градостроительства во всех странах. Это развитие прослеживается, начиная с древнейших времен и до наших дней.",
    authors: ["А.В.Бунин", "Л.А.Ильин", "Н.Х.Поляков"],
    genres: [
      {
        id: 1,
        title: "Детектив"
      },
      {
        id: 2,
        title: "История"
      },
      {
        id: 3,
        title: "Научно популярный"
      },
    ],
    images: ["l114353_1.jpg", "l114353_3.jpg", "l114353_8.jpg", "l114353_24.jpg"],
    dateWriting: "1945 г",
    seller: {
      name: "Ч Смирнов Б.В.",
      id: 6,
      type: 2
    },
    typeProduct: 1,
    rating: 2
  },
  {
    id: 11,
    price: 350000,
    title: "Автомобиль.",
    description: "В книге изложены устройство и работа автомобиля и дано описание взаимодействия его механизмов. Кроме того, в книге приведены основы теплового процесса двигателя, его кинематики и динамики, элементы расчета деталей двигателя на прочность, а также изложены основные положения теории автомобиля и расчета его механизмов.",
    author: "А.А.Куров",
    genres: [
      {
        id: 2,
        title: "История"
      },
      {
        id: 3,
        title: "Научно популярный"
      },
    ],
    images: ["l114234_1.jpg", "l114234_12.jpg"],
    dateWriting: "1934 г",
    seller: {
      name: "ООО Бухгалтерия",
      id: 1,
      type: 3
    },
    typeProduct: 2,
    rating: 7
  },
  {
    id: 12,
    price: 70000,
    title: "Собрание сочинений Эдгара По в пяти томах",
    author: "Эдгар",
    genres: [
      {
        id: 2,
        title: "История"
      },
    ],
    images: ["l114172_3.jpg", "l114172_1.jpg", "l114172_19.jpg"],
    dateWriting: "По 1911-1913 гг",
    seller: {
      name: "Ч Смирнов Б.В.",
      id: 6,
    },
    typeProduct: 1,
    rating: 1
  },

  {
    id: 14,
    price: 200,
    title: "Машина швейная промышленная класса 10-Б",
    description: "Паспорт 10-Б.000.ПС Полтава 1979г. 21 с. Мягкий переплет, Обычный формат.",
    genres: [
      {
        id: 7,
        title: "Наука и техника"
      },
      {
        id: 8,
        title: "Путешествия и география"
      },
    ],
    images: ["16849438114493.jpg"],
    dateWriting: "1979 г",
    seller: {
      name: "Ч Смирнов Б.В.",
      id: 6,
      type: 2
    },
    typeProduct: 2,
    rating: 1
  },
]

export default mockBooks