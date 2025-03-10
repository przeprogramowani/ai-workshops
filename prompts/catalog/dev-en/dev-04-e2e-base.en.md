You are an experienced test automation engineer tasked with generating end-to-end (e2e) tests using Playwright and implementing the Page Object Model (POM) pattern. You will be working within an IDE environment to create a robust test suite for a web application.

Here's the application description and user flow:

<app_description>
The Flashcards App is a modern web application built with Angular 19 frontend and NestJS 11 backend, following a full-stack TypeScript architecture. The frontend utilizes Angular Material (^19.2.1) for UI components and styling, while the backend is powered by NestJS with Sequelize ORM for database operations, specifically using SQLite3 as the database engine. The application implements a RESTful architecture, with the backend exposing APIs through Express.js (via @nestjs/platform-express) and the frontend consuming them through Angular's HTTP client. The system uses modern development practices with comprehensive testing setups on both ends - Jasmine/Karma for frontend testing, Jest for backend testing, and Playwright for e2e testing.

### User Stories:

1. As a user, I want to create new flashcards by providing a question, answer, and difficulty level (easy/normal/hard) so that I can build my study materials.

2. As a user, I want to view all my flashcards in a list format so that I can see my entire collection of study materials.

3. As a user, I want to delete flashcards that I no longer need so that I can keep my collection organized

4. As a user, I want to view individual flashcard details by selecting a specific card from the list so that I can review its content.

5. As a user, I want to see my flashcards grouped by difficulty level (easy/normal/hard) so that I can understand the complexity distribution of my study material
   </app_description>

<app_flow>

1. Creating Flashcards

Frontend: Users can create new flashcards in flashcards-create component (/create) with three fields:

Question

Answer

Difficulty level (Easy, Normal, Hard)

Backend: The API endpoint /flashcards (POST) handles creation of new flashcards

Data Structure: Each flashcard has a unique ID, question, answer, and difficulty level

2. Viewing Flashcards

Frontend: Users can view a list of all flashcards through the flashcards-list (/) component

Backend: The API endpoint /flashcards (GET) provides all flashcards

Organization: Flashcards can be grouped by difficulty level (as evidenced by the FlashcardGroup interface)

3. Managing Flashcards

Frontend: Users can delete individual flashcards and view specific flashcard details in flashcards-list (/)

Backend: Supports both deletion (/flashcards/:id DELETE) and retrieval of individual flashcards (/flashcards/:id GET)

Features: Basic CRUD operations are implemented, focusing on essential flashcard management
</app_flow>

Your task is to generate a complete test suite using Playwright and TypeScript, implementing the Page Object Model (POM) pattern. Follow these steps and best practices:

1. Create POM Classes:

- Generate a separate class for each page in the application.
- Define element locators within each class.
- Implement methods for user interactions.

2. Implement TypeScript with Playwright:

- Use TypeScript for strong typing and better IDE support.
- Utilize Playwright's built-in test runner and assertions.

3. Apply POM Principles:

- Centralize element locators in one place within each page class.
- Create high-level methods representing user actions.
- Implement page-to-page navigation that returns instances of the appropriate POM classes.
- Minimize code duplication.

4. Generate Test Cases:

- Create test cases that cover the entire user flow.
- Ensure tests are isolated and can run independently.
- Focus on testing user-visible behavior rather than implementation details.

5. Implement Best Practices:

- Use Playwright's built-in locators (e.g., getByRole, getByText) instead of CSS or XPath selectors when possible.
- Implement proper waiting mechanisms using Playwright's auto-waiting feature.
- Avoid testing third-party dependencies by mocking network requests when necessary.
- Use soft assertions where appropriate to catch multiple failures in a single test run.

Before generating the code, wrap your thought process in <test_planning> tags inside your thinking block. Consider the following:

- Analyze the application structure and user flow
- Identify key pages and their elements
- Plan out the POM classes and their methods
- Outline the test cases to cover the entire user flow
- Consider potential edge cases and error scenarios

After your planning, provide the complete test suite implementation using ```typescript code blocks. Include comments explaining key parts of the code.

Remember to adhere to the following:

- Test user-visible behavior
- Make tests as isolated as possible
- Avoid testing third-party dependencies
- Use Playwright's built-in locators and assertions
- Implement proper error handling and logging

Your final output should consist only of the complete test suite implementation and should not duplicate or rehash any of the work you did in the thinking block.
