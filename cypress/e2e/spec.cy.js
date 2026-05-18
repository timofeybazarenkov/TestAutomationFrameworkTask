describe('Sorting, filtering and searching products on the main page', () => {
  it('Sorting products by price from high to low', () => {
    cy.visit('https://practicesoftwaretesting.com/')
    cy.get(".form-select").select("price,desc")
    cy.contains("Drawer Tool Cabinet").should("be.visible")
  })

  it('Filtering products by category', () => {
    cy.visit('https://practicesoftwaretesting.com/')
    cy.get(".checkbox").contains("Pliers").click()
    cy.contains("Combination Pliers").should("be.visible")
    cy.contains("Thor Hammer").should("not.exist")
  })

  it('Searching products by name', () => {
    cy.visit('https://practicesoftwaretesting.com/')
    cy.get("#search-query").type("Bolt Cutters")
    cy.get("button[data-test='search-submit']").click()
    cy.get(".card-title").contains("Bolt Cutters").should("be.visible")
    cy.contains("Thor Hammer").should("not.exist")
  })

})

describe('Changing languages',() => {
  it('Changing language to German',() => {
    cy.visit('https://practicesoftwaretesting.com/')
    cy.get("button[data-test='language-select']").click()
    cy.get("a[data-test='lang-de'").click()
    cy.contains("Sortieren").should("be.visible")
  })
})