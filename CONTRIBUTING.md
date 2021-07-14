# Contributing

## Style Guide

We expect everyone to strictly follow this style guide.
Before you either push a commit or create a Pull Request, please check if there are no linter errors present. We recommend using Visual Studio Code with the ESLint plugin installed for automatic linting.

## Before committing

We have adopted **[Conventional Commits](https://www.conventionalcommits.org)** as a ruleset for commit messages. In short, commit messages *must* be formatted using one the following prefixes:

- `build` – for changes made to the build system
- `chore` – for changes that do not change production code
- `ci` – for changes made to Continuous Integration (CI) configuration
- `docs` – for updates made to the documentation
- `feat` – for newly introduced features
- `fix` – for bug fixes and patches
- `improvement` – for overall made improvements
- `perf` – for changes optimizing the overall performance
- `refactor` – for refactored code that does not change the public Discord bot
- `revert` – for when reverting back to a previous commit
- `style` – for code style changes (such as indentation)
- `test` – for when adding tests or assertions

Examples:

`feat: add light integration`

`refactor: remove unused var`

You may also specify a scope. We **strongly** encourage you to use scopes, because it's an excellent way of determining what part of the codebase has been changed.

Example:

`feat(integration): add light integration`

## Installation

### Requirements

- yarn (`npm install -g yarn`)
- NodeJS

In your shell of choice, run:

```bash
git clone https://github.com/hub-home/core # clone the repo
yarn # install all the dependencies
yarn start:dev # start the developer environment
```