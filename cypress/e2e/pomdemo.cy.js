import { login } from "./Pages/Login"

const Login = new login()



it('POM Demo', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    Login.enterUsername('Admin')
    Login.enterPassword('admin123')
    Login.clickLogin()


})
