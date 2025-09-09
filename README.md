📱 Mobile Automation Testing with Appium & WebdriverIO
// ------------------------------------------------------
// This repository contains end-to-end test automation for the
// SwagLabs mobile app using Appium, WebdriverIO, and Node.js.
// It validates login form scenarios and ensures product quality.

//  Tools & Technologies
// * Appium Server v3 (running from CMD)
// * Node.js
// * WebdriverIO
// * Appium Inspector (for selectors)
// * scrcpy (to mirror Android screen)

// 🛠️ Test Coverage
// Test case 1. Verify login with no credentials
// Expected: "Username is required"

// Test case 2. Verify login with only username
// Expected: "Password is required"

// Test case 3. Verify login with only password
// Expected: "Username is required"

// Test case 4. Verify login with invalid credentials
// Expected: "Username and password do not match any user in this service."

// Test case 5. Verify login with valid credentials
// Expected: Navigate to Products page and display "PRODUCTS"



//  How to Run
// 1. Start Appium server from CMD: appium
// 2. Run WebdriverIO tests: npx wdio run wdio.conf.js
