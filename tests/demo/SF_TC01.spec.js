const {test} = require('@playwright/test');
import {loginPage} from '../../pages/login';

test('login function', async function({page}){
    const Login = new loginPage(page);
    await Login.navigatetoSFDC('https://login.salesforce.com/');
    await Login.loginSF('upendra.8119@pwc.sandbox', 'Upen@8119')
    await Login.selectAppLauncher("sales");

})

