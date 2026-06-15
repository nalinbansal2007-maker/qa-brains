import { expect } from "@playwright/test";
import { log } from "node:console";

export class loginpage {

      /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page=page
        this.email= '#email'
        this.password= '#password'
        this.submit='button[type="submit"]'
    }
   

    async openloginpage(){
        await this.page.goto('https://practice.qabrains.com/ecommerce')
    }

    async login1(uname,password){
        await this.page.locator(this.email).fill(uname)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.submit).click()
    }

   }









   /* 
    constructor(page){
        this.page = page;
        this.heading= this.page.getByRole('heading', { name: 'User Authentication' })
        this.loginbtn='#login'
        this.uname = '#email' 
        this.password = '#password'
        this.eyeicon="svg[stroke='currentColor'][fill='none']"
        this.submit = this.page.getByRole('button', { name: /Login/i })
        this.title='QA Practice Site'
        this.loginsuccess="//p[contains(text(),'Congratulations. You have successfully')]"
        
    }
   

   
   async login(name, password){
        await expect(this.heading).toBeVisible()
        await this.page.locator(this.loginbtn).click()
        await this.page.locator(this.uname).fill(name)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.eyeicon).click()
        await this.submit.click()
    }
    async verifyloginsuccess(){
       const name= await this.page.locator(this.loginsuccess)
       await expect(name).toBeVisible()
    }
    async verifytitle(){
        await expect(this.page).toHaveTitle(this.title)
        */
  
