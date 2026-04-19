# CourseShelf

### System Architecture

A simple client-server architecture with **ReactRouter v7** for the fullstack, **Tailwind** for the frontend styling, **Prisma** for database management, **Vitest** for unit/integration tests, and **Playwright** for E2E testing.

ReactRouter's ```loader``` handles fetching data from the server on load, and ```action``` handles form validation and submission, interacting with Prisma for any data mutations in the SQLite database.

#### Folder Structure
* ```app/routes``` - contains frontend + loaders and actions.
* ```app/tests/``` - contains all unit/integration/e2e tests.
* ```app/utils``` - contains ```labels.js```, a file for mapping DB enums to more human-parsable strings.
* ```app/db.server.js``` - contains the **PrismaClient** singleton.
* ```app/routes.js``` - contains all routes for the app.

### Setup Instructions

1. Run ```git clone https://github.com/yta3216/CourseShelf.git``` to clone the repository.
2. Open a new terminal at the project root directory (```CourseShelf/```).
3. Run ```npm install``` to install all dependencies.
4. Create an ```.env``` file in the root directory. Store ```DATABASE_URL="file:./dev.db"``` in it.
5. Create the SQLite database with ```npx prisma migrate dev```.
6. Seed the database with ```npx prisma db seed```.
7. Start the development server with ```npm run dev```.
8. Go to http://localhost:5173/ to view the website.

### Test Coverage

Run ```npm run test``` to run all unit/integration/e2e tests sequentially. Ensure that after any E2E tests are ran that the database is reset and re-seeded via ```npx prisma migrate reset```.

#### Description

There are 7 unit tests stored in ```app/tests/course-validation.test.js```. They cover cases regarding form validation for creating a new course in ```new-course.jsx```; specifically, they check for any missing fields (any of ```courseName```, ```department```, or ```term```), and whether the ```term```'s format is followed correctly.

There are two integration tests in ```app/tests/course-submission.test.js``` focusing on the entire course submission flow. The first covers the happy path; it tests that when valid information is entered in the form and if a redirect to the newly created course is returned in the response. The second covers a case where the form information is invalid and checks if it returns an appropriate message describing the error.

The two E2E tests are located in ```app/tests/e2e/course.test.js```. They cover the creation and material creation user flows.

### My Approach

I mainly used AI (Claude Sonnet v4.6) as a mentor/senior developer overseeing my project. Before I began writing anything, I specifically asked for it not to give me direct copy/paste code, and act as if I were a junior engineer that Claude, the senior engineer, was overseeing.

I would write the code myself first and scroll through the documentation to ensure I have full control over what I'm writing, and submit it to Claude for a code review of what I did wrong/what I could improve on, asking any clarifying questions if needed. While I tried to handle most of the architectural decisions myself, if I faced a concept I was unfamiliar with, I would ask it for advice on how to best approach it, and 'sanity-check' my understanding of a solution for it.
