class HomePage {
getLoginPage(){
   
   return cy.get('.navbar-nav .nav-item:nth-of-type(7)');
}
getLoginType(){
    //return  cy.get('select').select(argument,{ force: true });
    return cy.get('select');
}
getUserName() {
    return cy.get('#reg_username');
}

getEmail(){
    return cy.get('#employer input[aria-label="email"]');
}

getPassword(){
    return cy.get('#reg_password');
}

getLoginUserName(){
    return cy.get('#username');
}

getRegisterButton() {
    return cy.get('.woocommerce-Button');
}
userLogin(userType, email) {

    const homePage=new HomePage();
    cy.log("dsfdsfs",userType)
    homePage.getLoginPage().click();
    homePage.getLoginType(userType);  
    homePage.getLoginType().select(userType);
    homePage.getEmail().type(email);

}

}


export default HomePage