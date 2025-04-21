describe('template spec', () => {
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    cy.get('input[name="username"]')
      .type('Admin')

    cy.get('input[name="password"]')
      .type('admin123')

    cy.get('button')
      .contains('Login')
      .click()

    cy.location('pathname')
      .should('equal','/web/index.php/dashboard/index')

    cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
      .contains('Dashboard')
      .should('be.visible')
  
  })

it('Login - Fail', () => {

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
cy.get('input[name="username"]')
  .type('teste')

cy.get('input[name="password"]')
  .type('teste')

cy.get('button')
  .contains('Login')
  .click()

// cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
//   .should('contain','Invalid credentials')
//   .should('be.visible')
cy.get('.oxd-alert')

}
)

})