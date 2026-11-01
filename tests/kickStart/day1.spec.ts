import {test,expect} from "@playwright/test";

test("start testing my first test ",()=>{
    console.log("first test success");
    
})

test("start testing my second test ",()=>{
    console.log("second test success");
    
})

test("open the website and loign",async ({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator("//*[@id='user-name']").fill("standard_user");
await page.locator("//*[@id='password']").fill("secret_sauce");
await page.locator("//*[@id='login-button']").click();
})

test("open the website and loign uses css ",async ({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator('input[id="user-name"]').fill("standard_user");
await page.locator('input#password').fill("secret_sauce");
await page.locator("input[id=login-button]").click();
await page.locator("button#add-to-cart-sauce-labs-backpack").click();
await page.waitForTimeout(5000);
await page.locator("data-test=remove-sauce-labs-backpack").click();
await page.close();

})// "// this is not requied in css . // and @ require in xpath , in css we can use string but
//  only outer string is required"

test("Practice of Locator method with Options", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator(".form_group", { has: page.locator("input#user-name") }).click();
    await page.locator(".form_group", { has: page.locator("input#user-name") }).pressSequentially("standard_user");

    await page.locator(".form_group", { hasNot: page.locator("input#user-name") }).click();
    await page.locator(".form_group", { hasNot: page.locator("input#user-name") }).pressSequentially("secret_sauce");

    await page.locator("#login-button").click();

    await page.locator("//a", {hasText:"Sauce Labs Backpack132"}).click();
    await page.locator(".inventory_item_name", { hasNotText: /Sauce.*/ }).click();

})

test("open the website and loign uses by inbuilt_method ",async ({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.getByLabel("Username").fill("standard_user");
await page.getByPlaceholder("Password").fill("secret_sauce");
await page.getByTestId("login-button").click();
// const title =await page.getByTitle("Swag Labs");
// console.log("title of page is -- > ",title);
await page.getByTestId("inventory-item-name").first().click();
await page.close();


})
