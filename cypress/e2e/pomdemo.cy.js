import { login } from "./Pages/Login"

const Login = new login()



it('POM Demo', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    Login.enterUsername()
    Login.enterPassword()
    Login.clickLogin()


})
