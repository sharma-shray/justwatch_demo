import {chromium} from "playwright"
import '@testing-library/jest-dom/extend-expect'

describe('Launch Browser',()=>{
    // incase we have a website for this service we should show an error on the UI
    test('open',async()=>{
        //create a browser
        const browser= await chromium.launch({headless: false});
        const context=await browser.newContext();
        // create a tab
        const page= await context.newPage();
        //navigate to the webpage
        await page.goto('http://www.jw-business-api.com');
        // enter an invalid quotation
        await page.fill("input[name=quote amount]","100000");
        await page.getByRole('button', { name: 'submit' }).click();
        // verify that an error message is thrown.
        await expect(page.getByText('Please contact our support to raise your maximum quote budget', { exact: true })).toBeVisible();
        await browser.close();

    })

})