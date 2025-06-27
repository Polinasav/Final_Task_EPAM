const { default: loginPage } = require('./pages/login.page.cjs');
const LoginPage = require('./pages/login.page.cjs')
const testData = [
    {
        valid_username: 'standard_user', valid_password: 'secret_sauce',
        username: 'Polina', password: 'Awesome', title: 'Swag Labs'
    },
];

describe('Login Form', () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
    });
    testData.forEach(({ valid_username, valid_password, username, password, title }) => {

        //UC-1 Test Login form with empty credentials:

        it('Should reject empty credentials', async () => {

            await LoginPage.noUsernameLogin(username, password);
            
        })
        //UC-2 Test Login form with credentials by passing 

        it('Should reject empty password field', async () => {

            await LoginPage.noPasswordLogin(username, password);
            
        })

        //UC-3 Test Login form with credentials by passing 
        it('Should accept valid credentials', async () => {

            await LoginPage.validLogin(valid_username, valid_password);

            //Validate the title “Swag Labs” in the dashboard.

            const browserTitle = await browser.getTitle()
            console.log(`Page title after login: ${title}`);

            expect(browserTitle).toBe(title);
            if (browserTitle !== title) {
                throw new Error('Page title isn"t correct');
                console.log(`Page title is not correct!`)
            } {
                console.log(`Login successful - title is correct`);
            }


        })

    })

}
)
