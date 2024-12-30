exports.loginPage= class loginPage {
    constructor(page) {
        this.page = page;

        this.username_textbox = page.locator("#username")
        this.paswword_textbox = page.locator("#password")
        this.login_button=page.locator("input[name='Login']")

        this.appLauncher_button =page.getByRole('button', { name: 'App Launcher' })
        this.textApp = page.getByPlaceholder('Search apps and items...')
        this.clickApp = page.getByRole('option', { name: 'Sales', exact: true })
        
    }
    async navigatetoSFDC(URL){
        await this.page.goto(URL, {waitUntil:'load', timeout:30000});
        
    }
    async loginSF(txtUserName, txtPassword){
        await this.username_textbox.fill(txtUserName)
        await this.paswword_textbox.fill(txtPassword)
        await this.login_button.click()
        await this.page.waitForLoadState('networkidle');
    }
    async selectAppLauncher(strAppSelection){
        await this.appLauncher_button.click();
        await this.textApp.fill(strAppSelection);
        await this.page.waitForTimeout(2000);
        await this.clickApp.click();
    }



}