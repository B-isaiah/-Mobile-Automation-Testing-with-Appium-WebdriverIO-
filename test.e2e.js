/// <reference types="webdriverio" />
/// <reference types="@wdio/mocha-framework" />
/// <reference types="@wdio/appium-service" />

const {expect, browser, $ } = require('@wdio/globals');

// Test suite is a group of related test cases
describe('Swaglabs Login form validation test', () => {

// Test case to verify  all login scenarios
    it('should validate all lagin scenarios', async () => {

// Test case 1. Verify login with no credentials  
   const loginButton = await driver.$("accessibility id:test-LOGIN");
await loginButton.click();

// Assertion to verify error message for no credentials
const errorMessage = await driver.$("accessibility id:test-Error message");
await errorMessage.isDisplayed();

const emptyCredentialError = await driver.$("-android uiautomator:new UiSelector().text(\"Username is required\")");
await emptyCredentialError.isDisplayed();
await expect(emptyCredentialError).toHaveText("Username is required");

// Test case 2. Verify login with only username
await driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity");
await driver.setTimeout({ implicit: 2000 }); // Wait for app to load

const usernameInput = await driver.$("accessibility id:test-Username");
await usernameInput.setValue("Standard_user");
await loginButton.click();

// Assertion to verify error message for no password
const passwordError = await driver.$("-android uiautomator:new UiSelector().text(\"Password is required\")");
await passwordError.isDisplayed();
await expect(passwordError).toHaveText("Password is required");

// Test case 3. Verify login with only password
await driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity");
await driver.setTimeout({ implicit: 2000 }); // Wait for app to load

const passwordInput = await driver.$("accessibility id:test-Password");
await passwordInput.setValue("secret_sauce");
await loginButton.click();

// Assertion to verify error message for no username
const usernameError = await driver.$("-android uiautomator:new UiSelector().text(\"Username is required\")");
await usernameError.isDisplayed();
await expect(usernameError).toHaveText("Username is required");

// Test case 4. Verify login with invalid credentials
await driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity");
await driver.setTimeout({ implicit: 2000 }); // Wait for app to load

await usernameInput.setValue("invalid_user");
await passwordInput.setValue("invalid_password");
await loginButton.click();

// Assertion to verify error message for invalid credentials
const invalidCredentialError = await driver.$("-android uiautomator:new UiSelector().text(\"Username and password do not match any user in this service.\")");
await invalidCredentialError.isDisplayed();
await expect(invalidCredentialError).toHaveText("Username and password do not match any user in this service.");

   
    
// Test case 5. Verify login with valid credentials
await driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity");
await driver.setTimeout({ implicit: 2000 }); // Wait for app to load
await usernameInput.clearValue();
await passwordInput.clearValue();
await usernameInput.setValue("standard_user");
await passwordInput.setValue("secret_sauce");
await loginButton.click();

// Assertion to verify successful login by checking the presence of the products page
const productsTitle = await driver.$("-android uiautomator:new UiSelector().text(\"PRODUCTS\")");
await productsTitle.isDisplayed();
await expect(productsTitle).toHaveText("PRODUCTS");

 
    });
});
