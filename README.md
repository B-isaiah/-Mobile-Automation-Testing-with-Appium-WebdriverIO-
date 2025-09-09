<h1>📱 Mobile Automation Testing with Appium & WebdriverIO</h1>
<hr>

<p>
This repository contains end-to-end test automation for the 
<strong>SwagLabs mobile app</strong> using <strong>Appium</strong>, 
<strong>WebdriverIO</strong>, and <strong>Node.js</strong>. 
It validates login form scenarios and ensures product quality.
</p>

<h2>🔧 Tools & Technologies</h2>
<ul>
  <li>Appium Server v3 (running from CMD)</li>
  <li>Node.js</li>
  <li>WebdriverIO</li>
  <li>Appium Inspector (for selectors)</li>
  <li>scrcpy (to mirror Android screen)</li>
</ul>

<h2>🛠️ Test Coverage</h2>
<ol>
  <li><strong>Verify login with no credentials</strong><br>
      Expected: <code>Username is required</code></li>
  <li><strong>Verify login with only username</strong><br>
      Expected: <code>Password is required</code></li>
  <li><strong>Verify login with only password</strong><br>
      Expected: <code>Username is required</code></li>
  <li><strong>Verify login with invalid credentials</strong><br>
      Expected: <code>Username and password do not match any user in this service.</code></li>
  <li><strong>Verify login with valid credentials</strong><br>
      Expected: Navigate to Products page and display <code>PRODUCTS</code></li>
</ol>

<h2>✅ How to Run</h2>
<ol>
  <li>Start Appium server from CMD:<br>
      <code>appium</code></li>
  <li>Connect your local device</li>
  <li>Run WebdriverIO tests:<br>
      <code>npx wdio run wdio.conf.js</code></li>
</ol>
