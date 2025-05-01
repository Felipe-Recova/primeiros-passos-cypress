class MyInfoPage{
    selectorsList() {
        const selectors= {
            headerMyInfo: '[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]',
            firstNameField:'[name="firstName"]',
            middleNameField:'[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active',
            dateField: 'div.oxd-date-input input.oxd-input[placeholder="yyyy-dd-mm"]',
            dateCloseButton: '.--close',
            submitButton: "[type='submit']",
            nationalitySelect: ".oxd-select-text-input",
            nationalityList: ".oxd-select-dropdown",
            maritalStatusSelect: ".oxd-select-text-input",
            maritalList: ".oxd-select-dropdown"
        }
        return selectors
    }
    fillMyInfoPage() {
        cy.get(this.selectorsList().headerMyInfo).contains('PIM').should('be.visible')    
        cy.get(this.selectorsList().firstNameField).clear().type('Felipe')
        cy.get(this.selectorsList().middleNameField).clear().type('Recova')
        cy.get(this.selectorsList().lastNameField).clear().type('Castilhos')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('Recovera')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('77742')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('ABC_123456-xyz')
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2030-12-31')   
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().nationalitySelect).eq(0).click()      
        cy.get(this.selectorsList().nationalityList).contains('Brazilian').click()
        cy.get(this.selectorsList().maritalStatusSelect).eq(1).click()
        cy.get(this.selectorsList().maritalList).contains('Married').click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type('1983-07-27')   
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Success')
    }
}

export default MyInfoPage