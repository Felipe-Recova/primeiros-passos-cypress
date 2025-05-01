import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import Navbar from '../pages/navbar.js'
import MyInfoPage from '../pages/myInfoPage.js'
const loginPage= new LoginPage()
const dashboardPage= new DashboardPage()
const navbar= new Navbar()
const myInfoPage= new MyInfoPage()

describe('template spec', () => {

  it('User info Update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.validateDashboardPage()
    navbar.myInfoButton()
    myInfoPage.fillMyInfoPage()  
  })

it('Login - Fail', () => {

  loginPage.loginFail(userData.userFail.username, userData.userFail.password)

}
)

})