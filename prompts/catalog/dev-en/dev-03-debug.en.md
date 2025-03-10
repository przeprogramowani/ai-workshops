Analyse the ticket below about the fiche app in #codebase. Your task is to:

- Identify the exact problem - identify what the error is, what the consequences are for users and what malfunctions in the application cause.
- Suggest a potential solution - describe what validation steps (both client-side and server-side) could prevent blank fiches from being saved. Include that the solution should also display a message informing the user to complete the required fields.
- Do not implement the code - just provide precise suggestions that may help to fix the reported error.

Ticket #41: Bug allowing the creation of empty fiches

Priority: High
Status: Open
Category: Application bug
Reported by: Anna Nowak (anna.nowak@email.com)
Date reported: 09.03.2025, 09:45

Problem description:
The user reports that the application allows you to create and save a blank fiche - no question, no answer or both. Such fiches cause problems during learning, as blank screens appear or only one of the items (only question or only answer) is displayed.

Steps to reproduce:

- Go to ‘Create a new fiche’.
- Leave the ‘Question’ field blank
- Optional: enter an answer or leave this field blank as well
- Click the ‘Save’ button
- The system saves the fiche despite the lack of content in the required fields

Additional information:

- The problem occurs in all difficulty levels.
- Empty fiches disrupt the learning process, causing blank screens or fragmented content.
- The user has to manually remove blank fiches.
- Lack of form validation informing the user to complete the fields.

Proposed solution:

- Add client-side and server-side validation to prevent the fiche from being saved without filling in the ‘question’ and ‘answer’ fields and display an appropriate message to the user.

Based on the above information, identify the root cause of the error and describe a potential approach to resolving it. Do not implement changes without my permission.
