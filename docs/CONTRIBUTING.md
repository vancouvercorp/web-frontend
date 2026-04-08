# Contributing to Web Frontend

Thank you for your interest in contributing to the TechCorp Web Frontend project! This guide outlines the process and standards for contributing.

## Getting Started

1. **Fork the repository** and clone it locally.
2. **Install dependencies** by running `npm install`.
3. **Create a feature branch** from `main` using the naming convention:
   - `feature/<short-description>` for new features
   - `bugfix/<short-description>` for bug fixes
   - `docs/<short-description>` for documentation changes

## Development Workflow

1. Make your changes in your feature branch.
2. Ensure all tests pass by running `npm test`.
3. Run the linter with `npm run lint` and fix any issues.
4. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat: add new login component`
   - `fix: resolve dropdown z-index issue`
   - `docs: update API endpoint references`
5. Push your branch and open a Pull Request against `main`.

## Pull Request Guidelines

- **Title**: Use a clear, concise summary of the change.
- **Description**: Include the motivation, approach, and any relevant issue numbers (e.g., `Fixes #42`).
- **Screenshots**: Include before/after screenshots for UI changes.
- **Review**: At least one approval is required before merging.
- **CI**: All automated checks must pass.

## Code Standards

- Follow the existing ESLint and Prettier configuration.
- Write meaningful component and function names.
- Add unit tests for new functionality — aim for >80% coverage on new code.
- Use TypeScript for all new files.

## Running the Project

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Questions?

Reach out to the platform team on Slack in `#platform-engineering` or open a discussion in this repository.
