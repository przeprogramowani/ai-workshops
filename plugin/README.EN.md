# Code Review Plugin

## Remote environment

![](../_resources/img/fork-code-review.png)

1. Open [replit.com](https://replit.com/@przeprogramowan/GPTCodeReview)
2. Click "Fork" to create copy for your personal account
3. If needed, please create free account and continue

## Task

The `index.js` file contains the code that will allow you to conduct a Code Review using the GPT-4 API. The current implementation is the first step to creating an automated Code Review plugin that you can integrate with your CI/CD pipeline.

Make the response from the GPT-4 API properly formatted (JSON). Use `function calling` - https://platform.openai.com/docs/guides/gpt/function-calling or JSON Mode.

### Requirements

* [Node 20](https://nodejs.org/en)
* Add OpenAI Platform key in `.env` file ([How to create keys](https://platform.openai.com/account/api-keys))

### Install deps

`npm install`

### Run

`npm start`
