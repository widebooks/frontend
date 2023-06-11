const buyMock = {
  listBuy: [
    {
      id: 15,
      price: 350000,
      sumPrice: 350000,
      count: 1,
      total: 3,
      title: "#1В.Фалилеев.",
      description: "Это самая дорогая книга!!!Первая монография о выдающемся русском художнике-гравере В.Д.Фалилееве, которая и до настоящего времени является единственной.\n" +
        "Большой формат: 22,3 * 28,3см.; 94, [2] стр.\n" +
        "Книга в мягких трёхцветных художественно оформленных издательских обложках.",
      author: "Н.И.Романов",
      city: "Москва",
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
      sumPrice: 600000,
      count: 2,
      total: 2,
      title: "#2Nameless Coffin.",
      description: "Раритет Книга в издательской бумажной обложке. На английском языке. Состояние хорошее. 215 стр.\n" +
        "Gwendoline Butler, nе Williams (1922 - 2013) was a British writer of mystery fiction and romance novels since 1956, she used the pseudonym Jennie Melville. Credited for the invention of \"woman police detective\", is well known for her series of inspector John coffin novels as Gwendoline Butler, and a female detective Charmian Daniels as Jennie Melville.",
      author: "Gwendoline Butler (Гвендолин Батлер)",
      city: "Москва",
      genres: [
        {
          id: 1,
          title: "Детектив"
        }
      ],
      images: ["l113994_1.jpg", "l113994_3.jpg"],
      dateWriting: "1967 г",
      seller: {
        name: "ООО Книжный дом",
        id: 2
      },
      rating: 1
    },
  ],
  commonPrice: 950000
}

export default buyMock;