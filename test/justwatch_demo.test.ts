import {chromium} from "playwright"
import '@testing-library/jest-dom/extend-expect'

describe('Launch Browser',()=>{
    // incase we have a website for this service we should show an error on the UI
    test('open',async()=>{
        const browser= await chromium.launch({headless: false});
        const context=await browser.newContext();
        const page= await context.newPage();
        await page.goto('http://www.jw-business-api.com');
        await page.fill("input[name=quote amount]","1000000000");
        await page.getByRole('button', { name: 'submit' }).click();
        await expect(page.getByText('Please contact our support to raise your maximum quote budget', { exact: true })).toBeVisible();
        await browser.close();

    })

})