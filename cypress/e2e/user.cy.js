import userData from '../fixtures/users/userData.json'

describe('template spec', () => {

  const selectorsList = {

    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    headerMyInfo: '[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]',
    firstNameField:'[name="firstName"]',
    middleNameField:'[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: '[placeholder="yyyy-mm-dd"]',
    dateCloseButton: '.--close',
    submitButton: "[type='submit']"
  
  }

  it.only('User info Update', () => {
    cy.visit('/auth/login')
  
    cy.get(selectorsList.usernameField)
      .type(userData.userSuccess.username)

    cy.get(selectorsList.passwordField)
      .type(userData.userSuccess.password)

    cy.get(selectorsList.loginButton)
      .click()

    cy.location('pathname')
      .should('equal','/web/index.php/dashboard/index')

    cy.get(selectorsList.dashboardGrid)
      .should('be.visible')

    cy.get(selectorsList.myInfoButton)
      .click()

    cy.get(selectorsList.headerMyInfo)
      .contains('PIM')
      .should('be.visible')
    
    cy.get(selectorsList.firstNameField)
      .clear()
      .type('Felipe')

    cy.get(selectorsList.middleNameField)
      .clear()
      .type('Recova')

    cy.get(selectorsList.lastNameField)
      .clear()
      .type('Castilhos')

    cy.get(selectorsList.genericField)
      .eq(3)
      .clear()
      .type('Recovera')

    cy.get(selectorsList.genericField)
      .eq(4)
      .clear()
      .type('77742')

    cy.get(selectorsList.genericField)
      .eq(5)
      .clear()
      .type('123')

    cy.get(selectorsList.genericField)
      .eq(6)
      .clear()
      .type('ABC_123456-xyz')

    cy.get(selectorsList.genericField)
      .eq(8)
      .clear()
      .type('123456')    
 
    cy.get(selectorsList.genericField)
      .eq(9)
      .clear()
      .type('654321')    

    cy.get(selectorsList.genericField)
      .eq(7)
      .clear()
      .type('2030-12-31')   

    // cy.get(selectorsList.dateCloseButton)
    //   .click()

    cy.get(selectorsList.submitButton)
      .eq(0)
      .click()

    cy.get('body')
      .should('contain', 'Success')
  
  })

it('Login - Fail', () => {

cy.visit('/auth/login')
    
cy.get(selectorsList.usernameField)
  .type(userData.userFail.username)

cy.get(selectorsList.passwordField)
  .type(userData.userFail.password)

cy.get(selectorsList.loginButton)
  .click()

cy.get(selectorsList.wrongCredentialAlert)

}
)

})