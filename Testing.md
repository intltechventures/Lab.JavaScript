JavaScript Testing Resources
====    
(work-in-progress...assemling a list, will add commentary as I expand my evaluation)


#Selenium
* https://www.seleniumhq.com/
* https://www.seleniumhq.org/
  * "Selenium automates browsers. That's it! What you do with that power is entirely up to you. Primarily, it is for automating web applications for testing purposes, but is certainly not limited to just that. Boring web-based administration tasks can (and should!) be automated as well."
* https://github.com/SeleniumHQ


* https://www.seleniumhq.org/projects/webdriver/
  * "Driving a browser natively as a user would either locally or on a remote machine using the Selenium Server it marks a leap forward in terms of browser automation."
  * WebDriver is the name of the key interface against which tests should be written in Java, the implementing classes one should use are listed as below: 
    * ```ChromeDriver, EventFiringWebDriver, FirefoxDriver, HtmlUnitDriver, InternetExplorerDriver, PhantomJSDriver, RemoteWebDriver, SafariDriver```
    * https://www.seleniumhq.org/about/platforms.jsp#programming-languages
      * http://nunit.org/
    * https://www.seleniumhq.org/about/platforms.jsp#testing-frameworks
  * http://www.webdriverjs.com/ 
  * https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs
    * "create robust, browser-based regression automation suites and tests"
    * "scale and distribute scripts across many environments"
    * "The WebDriverJS library uses a promise manager to ease the pain of working with a purely asynchronous API. Rather than writing a long chain of promises, the promise manager allows you to write code as if WebDriverJS had a synchronous, blocking API (like all of the other Selenium language bindings)"


* https://www.seleniumhq.org/projects/ide/
  * "Selenium IDE is an integrated development environment for Selenium scripts. It is implemented as a Chrome and Firefox extension, and allows you to record, edit, and debug tests."
  * "Selenium IDE is not only a recording tool: it is a complete IDE. You can choose to use its recording capability, or you may edit your scripts by hand. With autocomplete support and the ability to move commands around quickly, Selenium IDE is the ideal environment for creating Selenium tests no matter what style of tests you prefer.:
  * Features:
    * Easy record and playback
    * Intelligent field selection will use IDs, names, or XPath as needed
    * Autocomplete for all common Selenium commands
    * Walk through tests
    * Debug and set breakpoints
    * All in one project file, containing all test cases and suites
  * https://github.com/SeleniumHQ/selenium-ide/wiki/Getting-Started-with-Plugins



#NightwatchJS
* http://nightwatchjs.org/
  * "Write End-to-End tests in Node.js quickly and effortlessly that run against a Selenium/WebDriver server."
  * "Nightwatch.js is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites. It uses the powerful W3C WebDriver API to perform commands and assertions on DOM elements."
* https://github.com/nightwatchjs/nightwatch
* https://nightcloud.io/
  * "NightCloud is Nightwatch's own cloud-based testing platform
which aims to simplify much further the way development teams write,
manage and run their automated tests."


#WebDdriverJS
* http://webdriver.io/
  * WebDriver bindings for Node.js
  * "WebdriverIO lets you control a browser or a mobile application with just a few lines of code. Your test code will look simple, concise and easy to read. The integrated test runner let you write asynchronous commands in a synchronous way so that you don’t need to care about how to handle a Promise to avoid racing conditions. Additionally it takes away all the cumbersome setup work and manages the Selenium session for you."
* https://github.com/webdriverio
  * https://github.com/webdriverio/webdriverio
* https://en.wikipedia.org/wiki/Selenium_(software)
   

# Angular Testing
* https://www.protractortest.org
  * E2E test framework for Angular apps 
  * https://www.protractortest.org/#/tutorial
  * https://protractor.angular.io/
    * "Protractor is made specifically for Angular apps. It supports Angular-specific locator strategies, which allows you to test Angular-specific elements without any setup effort on your part"
  * https://github.com/angular/protractor
    * "Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor is a Node.js program built on top of WebDriverJS. Protractor runs tests against your application running in a real browser, interacting with it as a user would."
    * "Protractor 5 is compatible with nodejs v6 and newer."
    * "Protractor works with AngularJS versions greater than 1.0.6/1.1.4, and is compatible with Angular applications. ```Note that for Angular apps, the binding and model locators are not supported. We recommend using by.css.```"


#Grunt 
* https://gruntjs.com/
* https://en.wikipedia.org/wiki/Grunt_(software)
  * Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. It uses a command-line interface to run custom tasks defined in a file (known as a Gruntfile).
  * As of September 2016, there were more than 5,000 plugins available in the Grunt ecosystem


#JasmineJS
* https://jasmine.github.io/
  * "Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests."
* https://github.com/jasmine/jasmine
* https://en.wikipedia.org/wiki/Jasmine_(JavaScript_testing_framework)
  * "Jasmine is an open source testing framework for JavaScript. It aims to run on any JavaScript-enabled platform, to not intrude on the application nor the IDE, and to have easy-to-read syntax. It is heavily influenced by other unit testing frameworks, such as ScrewUnit, JSSpec, JSpec, and RSpec."
* Articles:
  * https://medium.com/letsboot/testing-javascript-with-jasmine-basics-48efe03cf973
  * https://dev.to/aurelkurtula/unit-testing-with-jasmine-the-very-basics-74k
  * https://devhints.io/jasmine


#MochaJS
* https://mochajs.org/
  * "Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases"
* https://github.com/mochajs/mocha
* https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)
  * "Mocha is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library."


#Storybook
* https://storybook.js.org/
  * Storybook is a popular UI component development tool for React, Vue, and Angular. It helps you develop and design UI components outside your app in an isolated environment.
  * Professional developers at Airbnb, Dropbox, and Lonely Planet use Storybook to build durable documented UIs faster.
* https://storybook.js.org/examples/ 
* https://www.learnstorybook.com/
  * https://www.learnstorybook.com/angular/en/test/
* https://github.com/storybooks/storybook 
* Angular
  * https://storybook.js.org/basics/guide-angular/
    * https://storybook.js.org/basics/guide-angular/#write-your-stories
  * https://alligator.io/angular/storybook-angular/
  * https://www.npmjs.com/package/@storybook/angular
    * "Storybook for Angular is a UI development environment for your Angular components. With it, you can visualize different states of your UI components and develop them interactively."
* React
  * https://www.learnstorybook.com/react/en/test/
* Interaction testing
  * https://storybook.js.org/testing/interaction-testing/
* https://github.com/storybooks/storybook
  * "Interactive UI component dev & test: ```React, React Native, Vue, Angular, Ember```"
  * "Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components."
  "Storybook runs outside of your app. This allows you to develop UI components in isolation, which can improve component reuse, testability, and development speed. You can build quickly without having to worry about application-specific dependencies."
  * https://github.com/storybooks/storybook/tree/master/addons
* Articles
  * https://storybook.js.org/testing/react-ui-testing/
  * https://storybook.js.org/testing/structural-testing/
  * [Announcing Storybook 3.4, Polymer, Image/Vue/Angular Storyshots, Multi-Hierarchy, & more!](https://medium.com/storybookjs/announcing-storybook-3-4-db4d1341dedd)


#Enzyme
* JavaScript Testing utilities for React 
* https://airbnb.io/enzyme/
  * Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
  * Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.
* https://github.com/airbnb/enzyme

