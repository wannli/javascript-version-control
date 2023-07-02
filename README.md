# Language Suggestion App

This is a JavaScript application that allows users to make language suggestions to a text. Users can add, remove or replace text.

## Setup

1. Clone the repository to your local machine or open it in GitHub Codespaces.
2. Run `npm install` to install the dependencies.

## Usage

1. Open `index.html` in your browser.
2. Enter your text in the text area with the ID `textArea`.
3. To add a suggestion, call the `addSuggestion()` function with the suggestion as the argument.
4. To remove a suggestion, call the `removeSuggestion()` function with the suggestion as the argument.
5. To replace text, call the `replaceText()` function with the old text and new text as arguments.

## Styles

The styles for the application are defined in `styles.css`. The main elements are:

- `.textArea`: The text input area.
- `.suggestionBox`: The box where language suggestions are displayed.
- `.submitBtn`: The submit button.

## Scripts

The main JavaScript code for the application is in `script.js`. It uses the DOM element IDs defined in `index.html` and the functions `addSuggestion()`, `removeSuggestion()`, and `replaceText()`.

## Dependencies

The application's dependencies are listed in `package.json`.

## Ignored Files

The `.gitignore` file contains a list of files and directories that Git should ignore.

## GitHub Codespaces Configuration

The configuration for the GitHub Codespaces environment is in `.devcontainer/devcontainer.json`.

## GitHub Actions Workflow

The GitHub Actions workflow for the app is in `.github/workflows/main.yml`.