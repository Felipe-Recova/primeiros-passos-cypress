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
    fillPersonalDetails(firstName, middleName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }
    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, Birthdate) {
        cy.get(this.selectorsList().headerMyInfo).contains('PIM').should('be.visible') 
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driversLicenseDate)   
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(Birthdate)   
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    fillStatus() {
        cy.get(this.selectorsList().nationalitySelect).eq(0).click()      
        cy.get(this.selectorsList().nationalityList).contains('Brazilian').click()
        cy.get(this.selectorsList().maritalStatusSelect).eq(1).click()
        cy.get(this.selectorsList().maritalList).contains('Married').click()
    }
    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Success')
    } 
}

export default MyInfoPage