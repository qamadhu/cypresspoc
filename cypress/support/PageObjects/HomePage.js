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
    return cy.get('#employer input[aria-label="password"]');
}

getLoginButton() {
    return cy.get('#employer button[type="submit"]');
}
getLoginUserName(){
    return cy.get('.dropdown-toggle');
}
getRegisterButton() {
    return cy.get('.woocommerce-Button');
}

//This function is useful to perform user login
userLogin(userType, email,pwd) {

    const homePage=new HomePage();
    cy.log("dsfdsfs",userType)
    homePage.getLoginPage().click();
    //homePage.getLoginType(userType);  
    homePage.getLoginType().select(userType);
    homePage.getEmail().type(email);
    homePage.getPassword().type(pwd);
    homePage.getLoginButton().click();

}
getLoggedInUserName(){

}

}


export default HomePage