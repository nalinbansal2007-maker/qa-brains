import { test as base, expect } from '@playwright/test';
import { loginpage } from '../pages/loginpage.js';


 const test = base.extend({
 loginauth :async ({page},use) => {
    const login = new loginpage(page);
    await login.openloginpage();
    await login.login1('test@qabrains.com','Password123');
    await use(page);
 }

 })
export { test, expect };