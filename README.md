# GitHub PR Unview All

A Firefox extension that adds a button to uncheck all "Viewed" checkboxes in GitHub pull requests with a single click.

## Features

- Adds an "Unview All" button to GitHub pull request pages
- Unchecks all "Viewed" checkboxes with one click
- Works with GitHub's single-page application navigation
- Matches GitHub's native UI style

## Installation

1. Clone this repository or download the files
2. Open Firefox and go to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file from this extension

## Usage

1. Navigate to any GitHub pull request
2. Look for the "Unview All" button in the PR toolbar
3. Click the button to uncheck all "Viewed" checkboxes

## Development

The extension consists of:
- `manifest.json`: Extension configuration
- `content.js`: Main functionality

## License

MIT 
