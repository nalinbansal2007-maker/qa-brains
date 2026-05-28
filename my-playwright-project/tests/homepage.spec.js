import { test, expect } from '@playwright/test'
import { loginpage } from '../pages/loginpage'
import { homepage } from '../pages/Homepage'

test('homepage test', async ({ page }) => {

   
    const home= new homepage(page)
    const login=new loginpage(page)
    await home.gotohomepage();
    await login.login1()

   // await login.login('qa_testers@qabrains.com','Password123')
   
    await home.verifybuttons()
    await home.checkfilterapply()
    await page.waitForTimeout(4000)
})