

import { expect } from '@playwright/test'

export class homepage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){

        this.page = page;

       
        this.page=page;
        this.headerlogo= this.page.locator('.w-auto.h-auto' )
        this. cartlogo=this.page.locator('//small[.="(Practice Site)"]/parent::a/following-sibling::div/span/*[name()="svg"]')
        this.dropd=this.page.locator('button[data-slot="popover-trigger"]')
        this.dropdafterselect= this.page.locator('//button[text()="High to Low (Price)"]')
        this. likebtn="(//*[name()='svg' and @fill='currentColor'])[3]"
    }
    async gotohomepage(){
        await this.page.goto('https://practice.qabrains.com/ecommerce')
    }

    async verifybuttons(){
        await expect(this.headerlogo).toBeVisible()
         await expect(this.cartlogo).toBeVisible()
    }

    async checkfilterapply(){
        await this.page.locator(this.dropd).click()
        await expect(this.likebtn).toBeVisible()

    }

}