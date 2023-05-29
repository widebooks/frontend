import {GENRE} from "constants.js";

const {DETECTIVE, HISTORY, POPULAR_SCIENCE, FICTION, ANTIQUES, EDUCATIONAL, SCIENCE, TRAVEL, ART, INDUSTRY} = GENRE;

const mockBooks = [
  {
    id: 15,
    price: 350000,
    title: "В.Фалилеев.",
    description: "Это самая дорогая книга!!!Первая монография о выдающемся русском художнике-гравере В.Д.Фалилееве, которая и до настоящего времени является единственной.\n" +
      "Большой формат: 22,3 * 28,3см.; 94, [2] стр.\n" +
      "Книга в мягких трёхцветных художественно оформленных издательских обложках.",
    author: "Н.И.Романов",
    city: "Москва",
    genres: [TRAVEL, EDUCATIONAL],
    images: ["114057_preview.jpg"],
    dateWriting: "1923 г",
    seller: {
      name: "ООО Бухгалтерия",
      id: 1,
      type: 3
    },
    rating: 2
  },
  {
    id: 13,
    price: 350000,
    title: "Nameless Coffin.",
    description: "Раритет Книга в издательской бумажной обложке. На английском языке. Состояние хорошее. 215 стр.\n" +
      "Gwendoline Butler, nе Williams (1922 - 2013) was a British writer of mystery fiction and romance novels since 1956, she used the pseudonym Jennie Melville. Credited for the invention of \"woman police detective\", is well known for her series of inspector John coffin novels as Gwendoline Butler, and a female detective Charmian Daniels as Jennie Melville.",
    author: "Gwendoline Butler (Гвендолин Батлер)",
    city: "Москва",
    genres: [DETECTIVE],
    images: ["l113994_1.jpg", "l113994_3.jpg"],
    dateWriting: "1967 г",
    seller: {
      name: "ООО Книжный дом",
      id: 2,
      type: 3
    },
    rating: 1
  },
  {
    id: 2,
    price: 200000,
    title: "Император Александр I. Его жизнь и царствование. Н.К. Шильдер 1897 - 1898 гг.",
    description: "Раритет",
    author: "Н.К. Шильдер",
    city: "Москва",
    genres: [HISTORY, ANTIQUES],
    images: ["l114365_1.jpg"],
    seller: {
      name: "ЮЛ Книга.РУ",
      id: 4,
      type: 1
    },
    rating: 8,
    avatar: "123123132.jfif",
  },
  {
    id: 9,
    price: 110000,
    title: "Тринадцать книг из серии Русские путешественники",
    description: "Древнегреческие рукописи. Тринадцать книг в трех цельнокожаных футлярах с удобным хранением и выниманием. Золотое тиснение с названиями произведений на каждом футляре. Бархатная подложка. Дорогое подарочное оформление. Состояние всех книг отличное. Формат: 23x16,5x15,5 см.",
    genres: [TRAVEL, EDUCATIONAL],
    city: "Москва",
    images: ["114273_preview.jpg"],
    dateWriting: "1946-1948 гг",
    seller: {
      name: "Ч Копчигин О.Ю.",
      id: 5,
      type: 2
    },
    rating: 4
  },
  {
    id: 3,
    price: 50000,
    title: "О дворянстве. [Жалованная грамота] (Утерянная)",
    author: "",
    city: "Псков",
    genres: [HISTORY, ANTIQUES],
    images: ["l114363_1.jpg"],
    seller: {
      name: "Смирнов Б.В.",
      id: 6,
      type: 2
    },
    rating: 6,
    avatar: "Без названия.jfif",
  },
  {
    id: 4,
    price: 350000,
    title: "(утерянная) История русской словесности с древнейших  времен до наших дней. В трех томах.",
    author: "П.Н.Полевой",
    city: "Пермь",
    genres: [FICTION, TRAVEL],
    images: ["l114354_1.jpg"],
    dateWriting: "1903 г",
    seller: {
      name: "ООО Книжный двор",
      id: 7,
      type: 3
    },
    rating: 0.5,
    avatar: "thumb_20140128010209216.jpg",
  },
  {
    id: 5,
    price: 150000,
    title: "Записки о уженье рыбы.",
    author: "С.Т. Аксаков",
    city: "Зеленоград",
    genres: [FICTION, ART],
    dateWriting: "1886 г",
    seller: {
      name: "ЮЛ Книжный",
      id: 3,
      type: 1,
    },
    rating: 3.4
  },
  {
    id: 6,
    price: 110000,
    title: "Полное собрание сочинений Л.Н.Толстого в двадцати томах",
    description: "Экземпляр в оригинальных издательских цельноколенкоровых переплётах с золотым тиснением на корешке. (самая дорогая, самая выгодная, такой нигде не найти)",
    author: "",
    city: "Екатеринбург",
    genres: [DETECTIVE],
    images: "",
    dateWriting: "1912-1913 гг",
    seller: {
      name: "Ч Копчигин О.Ю.",
      id: 5,
      type: 2,
    },
    rating: 8
  },
  {
    id: 7,
    price: 40000,
    title: "Плавания Баренца 1594-1597 г.. ",
    description: "В издательском коленкоровом переплете с суперобложкой. Состояние отличное. 1 л. фронт., 308 стр, ил., карт. Формат 21,5×16 см.\n" +
      "Перевод с латинского А.И.Малеина. Переплет, форзац и графическое оформление художника М.А.Таранова. Множество иллюстраций в тексте и на вклейках, в конце — карта плаваний Баренца.",
    author: "Г. Де Фер",
    genres: [TRAVEL, ART],
    images: ["l114350_1.jpg"],
    dateWriting: "1936 г",
    seller: {
      name: "ООО Бухгалтерия",
      id: 1,
      type: 3,
    },
    rating: 10
  },
  {
    id: 8,
    price: 135000,
    title: "Путешествия и приключения на суше на море и в воздухе. Вокруг света за 1928 г. № 1-24. [Полный годовой комплект].",
    description: "Первая публикация знаменитого фантастического романа А.Беляева «Человек-амфибия».\n" +
      "Полный комплект всех номеров \"Вокруг света\" за 1928 год (24 номера). В красивом цельнокожаном переплете с художественным золотым и конгревным тиснением. Большой формат: 30,5х23 см. Богато иллюстрированное издание с многочисленными рисунками в тексте.",
    author: "А.Беляева",
    city: "Москва",
    genres: [TRAVEL, FICTION],
    images: ["l114331_1.jpg"],
    dateWriting: "1928 г",
    seller: {
      name: "ЮЛ Книга.РУ",
      id: 4,
      type: 1,
    },
    rating: 3.4
  },
  {
    id: 1,
    price: 1100000,
    description: "Книги в двух издательских полукожаных переплетах с золотым тиснением. Экземпляр на особой бумаге с \"большой\" короной на корешке. Золотой обрез. Формат: 30х22 см.. С 53 портретами и иллюстрациями. Отличная сохранность.",
    title: "Император Александр II. Его жизнь и царствование",
    author: "С.С. Татищев",
    city: "Санкт-Петербург",
    genres: [HISTORY, ANTIQUES],
    images: ["l114366_1.jpg"],
    seller: {
      name: "Ч Копчигин О.Ю.",
      id: 5,
      type: 2,
    },
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
    genres: [POPULAR_SCIENCE, EDUCATIONAL],
    images: ["l114353_1.jpg", "l114353_3.jpg", "l114353_8.jpg", "l114353_24.jpg"],
    dateWriting: "1945 г",
    seller: {
      name: "Ч Смирнов Б.В.",
      id: 6,
      type: 2,
    },
    rating: 2
  },
  {
    id: 11,
    price: 350000,
    title: "Автомобиль.",
    description: "В книге изложены устройство и работа автомобиля и дано описание взаимодействия его механизмов. Кроме того, в книге приведены основы теплового процесса двигателя, его кинематики и динамики, элементы расчета деталей двигателя на прочность, а также изложены основные положения теории автомобиля и расчета его механизмов.",
    author: "А.А.Куров",
    city: "Ульяновск",
    genres: [POPULAR_SCIENCE, EDUCATIONAL],
    images: ["l114234_1.jpg", "l114234_12.jpg"],
    dateWriting: "1934 г",
    seller: {
      name: "ООО Бухгалтерия",
      id: 1,
      type: 3,
    },
    category: {
      museumExhibit: false,
      antiquary: false,
      handwritten: true,
    },
    rating: 7
  },
  {
    id: 12,
    price: 70000,
    title: "Собрание сочинений Эдгара По в пяти томах",
    author: "Эдгар",
    city: "Нижний новгород",
    genres: [DETECTIVE],
    images: ["l114172_3.jpg", "l114172_1.jpg", "l114172_19.jpg"],
    dateWriting: "По 1911-1913 гг",
    seller: {
      name: "Ч Смирнов Б.В.",
      id: 6,
      type: 2
    },
    rating: 1
  },
  {
    id: 14,
    price: 200,
    title: "Машина швейная промышленная класса 10-Б",
    description: "Паспорт 10-Б.000.ПС Полтава 1979г. 21 с. Мягкий переплет, Обычный формат.",
    city: "Уфа",
    genres: [INDUSTRY],
    images: ["16849438114493.jpg"],
    dateWriting: "1979 г",
    seller: {
      name: "Ч Смирнов Б.В.",
      id: 6,
      type: 2,
    },
    rating: 1
  },
]

export default mockBooks