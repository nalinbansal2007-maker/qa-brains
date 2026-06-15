import { test, expect } from '../fixtures/fixture.js';
// import { loginpage } from '../pages/loginpage'

import { homepage } from '../pages/Homepage'

test('homepage test', async ({ loginauth }) => {

   
    const home= new homepage(loginauth)
   

   // await login.login('qa_testers@qabrains.com','Password123')
   
    await home.verifybuttons()
    await home.checkfilterapply()
    await loginauth.waitForTimeout(4000)
    
})