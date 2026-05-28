import { test, expect } from '@playwright/test'
import { loginpage } from '../pages/loginpage.js'

test('login', async ({ page }) => {

    const log = new loginpage(page)
    await log.openloginpage()
    await log.login('qa_testers@qabrains.com','Password123');
    await log.verifyloginsuccess()
    await log.verifytitle()
    await page.waitForTimeout(5000)


})