
export default class basePage {

    open(path) {
        cy.visit('https://practicesoftwaretesting.com/'+path)
    }

}