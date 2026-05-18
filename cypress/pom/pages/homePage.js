import basePage from "./basePage.js";

class homePage extends basePage {
    
    open() {super.open('');}

    clickCheckbox(name) {
        cy.get(".checkbox").contains(name).click();
    }

    sortProductOrderBy(option) {
        cy.get(".form-select").select(option);
    }

    getProductCard(name) {
        return cy.get(".card-title").contains(name);
    }
    
    searchProductByName(name) {
        cy.get("#search-query").type(name);
        cy.get("button[data-test='search-submit']").click();
    }

    changeLanguage(language) {
        cy.get("button[data-test='language-select']").click();
        cy.get("a[data-test='lang-"+language.toLowerCase()+"'").click();
    }

    getFilterCategoryTitleByName(name) {
        return cy.get("h4.grid-title").contains(name);
    }

}

export default new homePage();
