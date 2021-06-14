---
---

[![Wonderful](https://wonderful.io/meta/wonderful_lettertype_tm_1000x287_4c5965-on-white.jpg)](https://wonderful.io)

# [The Wonderful UI / Interaction Developer Challenge](https://github.com/wndrfl/ui-developer-challenge)

## _As Implemented by Michael Dinerstein_

---

### Notes on Decisions

_I interpreted the instructions very literally, and implemented this task using only HTML, CSS and JavaScript. I did not opt to use jQuery, Bootstrap, Tailwind, or other libraries to speed up development due to the amount of overhead they can introduce into the installation (negatively affecting PageSpeed/Lighthouse scores, etc.)_

- HTML:

  - HTML5 boilerplate based on: https://www.matuzo.at/blog/html-boilerplate/

- CSS:

  - While using CSS variables here would've streamlined development, [they're not supported in any version of Internet Explorer](https://caniuse.com/css-variables) so they were avoided.
  - Eric Meyer's Reset CSS 2.0 was used.
  - print.css is included, but not leveraged here.

- JavaScript:

  - Built assuming JavaScript is enabled in the user's browser. Did not spend time including fallbacks, legacy browser version checks, or redirects for unsupported browsers (i.e., old IE)
  - Avoided ES6, as much is not supported in IE10+

- General Organization:

  - Working with vanilla HTML, CSS and JS was a nice reminder of how _good_ we have it with modern front-end tooling. Considering SCSS alone, with the ability to split CSS into multiple files for smoother workflow and improved readability/organization while optimizing the final CSS result. Or, using Babel to transpile ES6 into browser-readable syntax, _and_ minifying. Amazing!

---

### Original Instructions:

The purpose of this challenge is to test and measure a Front End engineer's ability to interpret and implement a sample user interface that is detailed by a provided design. In this document, we will present you with a scenario that is intended to help showcase your engineering talents and spark creative thinking and problem solving. We will be watching both the journey and the final product.

## The Story

Wonderful designers have mocked a landing page that has been approved by the "client", and this landing page is now ready to be implemented. The plan is to implement this page in a way that allows the code to be agnostic of the platform or framework in which they ultimately will reside. Therefore, the request is to develop them with Javascript, CSS, and HTML.

The designers and client are open for any embellishments that might further breathe life into the page, but are also content to launch a page that simply matches the design. It is at the developer's discretion as to how to interpret what is correct for this page.

## Mocks

The mocks for the landing page in question are located at the following url:
https://www.figma.com/file/sGizBkHcKcy9PUoLYgMYg8/Wonderful-UI-Code-Challenge?node-id=0%3A1

## Expected Delivery

- a live URL to view your submission in action
- a reviewable copy of the codebase
- the ability to chat through your process and decisions

## Requirements

- Develop a front end page (as much as possible within your timeframe) to match the provided mocks. The expectation to be able to understand your decisions about where to best invest your time on a design that would likely take more time than you may have available for this code challenge.
- Use your best judgement it pertains to animations, interactivity, and responsiveness.
- Match the mocks to the best of your ability, within the time you have available for this challenge.

## The Rules

- The recommended timeframe is less than 1 week (assuming the challenge is worked on off house, etc), but we understand that you may have limited time to complete this challenge. You are done when you are satisfied, and you feel comfortable returning your work.
- The completed module must be written with Javascript, CSS, and HTML.
- You can use any resource or library that you think is _best for the product_. However, you must be able to justify and attribute any external resource.
- You can ask as many questions you need to anybody at Wonderful. We have been working with this client for many years and can provide answers or feedback, or validate any assumptions.

## You will be graded on:

- the resilience, strategy, and organization of your codebase
- your knowledge of best practices
- your grasp of the CSS language
- semantic markup
- the elegance, efficiency, and performance of any javascript
- your understanding of best HTML practices
- your creative intuition as to how to "fill in the gaps" that are missing within the design
- your development speed, compared to the quality of the delivered product
- how easy it would be for another developer to hop into the project and work with you
- our understanding of the quality of your development process

✨ Thanks! Good luck!
