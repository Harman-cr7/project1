export class login{


    
 
    // enterUsername(){
    //     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
 
    // }

    // enterPassword(){
    //     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
       
    // }

    // clickLogin(){
    //     cy.get('.oxd-button').click()

    // }

    enterUsername(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
 
    }

    enterPassword(){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
       
    }

    clickLogin(){
        cy.get('.oxd-button').click()

    }
}