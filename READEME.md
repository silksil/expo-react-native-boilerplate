# Tech Stack

| Library          | Category         | Description                                    |
| ---------------- | ---------------- | ---------------------------------------------- |
| React Native     | Mobile Framework | The best cross-platform mobile framework       |
| React            | UI Framework     | The most popular UI framework in the world     |
| TypeScript       | Language         | Static typechecking                            |
| React Navigation | Navigation       | Performant and consistent navigation framework |
| Expo             | SDK              | Allows (optional) Expo modules                 |
| Jest             | Test Runner      | Standard test runner for JS apps               |
| date-fns         | Date library     | Excellent date library                         |
| AsyncStorage     | Persistence      | State persistence                              |
| Eslint           | Static testing   | Forces code style and tracks errors            |
| Husky            | Static testing   | Run commands after certain git hooks           |
| Prettier         | Static testing   | Takes care of code formatting                  |
| Lint-stage       | Static testing   | Helps running linter only to staged git file   |

# Development tools

## Git hooks

Through `husky`, `eslint`, `prettier`, `typescript` and `lint-stage` code will be prettified and checked before certain commits:

- pre-commit: before a commit, code will automatically be prettified
- pre-push: before code will be pushed it will be formatted with prettier, checked on typescript errors/warnings and checked against (eslint) linting rules.
