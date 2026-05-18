import homePage from "../pom/pages/homePage.js";

describe('Sorting, filtering and searching products on the main page', () => {
  it('Sorting products by price from high to low', () => {
    homePage.open();
    homePage.sortProductOrderBy("price,desc");
    homePage.getProductCard("Drawer Tool Cabinet").should("be.visible");
  })

  it('Filtering products by category', () => {
    homePage.open()
    homePage.clickCheckbox("Pliers");
    homePage.getProductCard("Combination Pliers").should("be.visible");
    homePage.getProductCard("Thor Hammer").should("not.exist");
  })

  it('Searching products by name', () => {
    homePage.open();
    homePage.searchProductByName("Bolt Cutters");
    homePage.getProductCard("Bolt Cutters").should("be.visible");
    homePage.getProductCard("Thor Hammer").should("not.exist");
  })

})

describe('Changing languages',() => {
  it('Changing language to German',() => {
    homePage.open();
    homePage.changeLanguage("de");
    homePage.getFilterCategoryTitleByName("Sortieren").should("be.visible");
  })
})