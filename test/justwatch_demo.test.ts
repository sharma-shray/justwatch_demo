import {chromium} from "playwright"
import '@testing-library/jest-dom/extend-expect'
import {expect,test} from "@playwright/test"

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

        // enter another invalid quotation
        await page.fill("input[name=quote amount]","100001");
        await page.getByRole('button', { name: 'submit' }).click();
        // verify that an error message is thrown.
        await expect(page.getByText('Please contact our support to raise your maximum quote budget', { exact: true })).toBeVisible();

        // enter an invalid quotation
        await page.fill("input[name=quote amount]","99999");
        await page.getByRole('button', { name: 'submit' }).click();
        // verify that an error message is thrown.
        await expect(page.getByText('congratulations the quotation has been submitted.', { exact: true })).toBeVisible();
        await browser.close();

    })

    // incase some people are accessing our service through a entry point
    test("verify the quote amount in the payload",async({request,baseURL})=>{
        let response= await request.post('${baseURL}',{
            data:{
                "description": "Quotation from a big company",
                "Quote amount": "100000"
            } });
        // taking the response code as 400 as it would be an error scenario and entry point should return error we can expect and error code here
        expect(response.status()).toBe(400);
        let res= await response.json();
        console.log(res);


        response= await request.post('${baseURL}',{
            data:{
                "description": "Quotation from a big company",
                "Quote amount": "100001"
            } });
        // taking the response code as 400 as it would be an error scenario and entry point should return error we can expect and error code here
        expect(response.status()).toBe(400);
         res= await response.json();
        console.log(res);


        response= await request.post('${baseURL}',{
            data:{
                "description": "Quotation from a big company",
                "Quote amount": "99999"
            } });
        // taking the response code as 200 as it would be a positive scenario the json can then be validated for what response we receive from our service
        expect(response.status()).toBe(200);
         res= await response.json();
        console.log(res);


    })

})