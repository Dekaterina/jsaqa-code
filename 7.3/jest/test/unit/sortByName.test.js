const sorting = require("../../app");

describe("Books names test suite", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("If the array is empty", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  it("Single element array", () => {
    expect(sorting.sortByName(['Толькл одна книга'])).toEqual(['Только одна книга']);
  });

  it("Case insensitive sorting", () => {
    const mixedCaseArray = ['Гарри', 'гарри'];
    expect(sorting.sortByName(mixedCaseArray)).toEqual(['гарри', 'Гарри']);
  });
});
