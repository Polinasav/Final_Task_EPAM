class LoginPage {

 


    get usernameTextbox() {
        return $(`//input[@id="user-name"]`)
    }

    get passwordTextbox() {
        return $(`//input[@id='password']`)
    }

    get loginButton() {
        return $(`//input[@id='login-button']`)
    }

    get errorMessegeUsername() {
        return $(`//a[text()='Epic sadface: Username is required']`)
    }

    get errorMessegePassword() {
        return $(`//a[text()='Epic sadface: Password is required']`)
    }



    async noUsernameLogin(username, password) {

        //Type any credentials into "Username" and "Password" fields.

        console.log(`[noUsernameLogin] Typing username: ${username}`);
        await this.usernameTextbox.addValue(String(username));

        console.log(`[noUsernameLogin] Typing password: ${password}`);
        await this.passwordTextbox.addValue(String(password));

        //Clear the inputs

        console.log(`[noUsernameLogin] Clearing input fields`);
        await this.usernameTextbox.clearValue();
        await this.passwordTextbox.clearValue();

        //Hit the "Login" button.

        console.log(`[noUsernameLogin] Clicking login button`);
        await this.loginButton.click();

        //Check the error messages: "Username is required".

      
        await this.errorMessegeUsername.isDisplayed();
        console.log(`[noUsernameLogin] "Username is requeired" error messege id displayed`);
    }


    async noPasswordLogin(username, password) {

        //Type any credentials in username.

        console.log(`[noPasswordLogin] Typing username: ${username}`);
        await this.usernameTextbox.addValue(String(username));

        //Enter password.

        console.log(`[noPasswordLogin] Typing password: ${password}`);
        await this.passwordTextbox.addValue(String(password));

        //Clear the "Password" input.

        console.log(`[noPasswordLogin] Clearing password input`);
        await this.passwordTextbox.clearValue();

        //Hit the "Login" button.

        console.log(`[noPasswordLogin] Clicking login button`);
        await this.loginButton.click();

        //Check the error messages: "Password is required".
        await this.errorMessegePassword.isDisplayed();
        console.log(`[noPasswordLogin] Password error displayed: "Password is required"`);
    }
   

    async validLogin(username, password) {

        //Type credentials in username which are under Accepted username are sections.
        console.log(`[validLogin] Using VALID_USERNAME: ${username}`);
        await this.usernameTextbox.addValue(String(username));

        //Enter password as secret sauce.
        console.log(`[validLogin] Using VALID_PASSWORD: ${password}`);
        await this.passwordTextbox.addValue(String(password));

        //Click on Login 
        console.log(`[validLogin] Clicking login button`);
        await this.loginButton.click();
       
    }

}

module.exports = new LoginPage();