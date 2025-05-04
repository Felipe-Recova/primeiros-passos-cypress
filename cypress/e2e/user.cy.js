import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import Navbar from '../pages/navbar.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

var chance = new Chance()
const loginPage= new LoginPage()
const dashboardPage= new DashboardPage()
const navbar= new Navbar()
const myInfoPage= new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User info Update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.validateDashboardPage()
    navbar.myInfoButton()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails(chance.ssn(), chance.ssn(), '2030-12-30', '1983-07-27')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
})