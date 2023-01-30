# Tech Stack

| Library          | Category         | Description                                  |
| ---------------- | ---------------- | -------------------------------------------- |
| React Native     | Mobile Framework | Cross-platform mobile framework              |
| React            | UI Framework     | UI framework                                 |
| Expo             | SDK              | React Native framework                       |
| TypeScript       | Language         | Static typechecking                          |
| React Navigation | Navigation       | Navigation framework                         |
| Jest             | Test Runner      | Standard test runner for JS apps             |
| date-fns         | Date library     | Date library                                 |
| AsyncStorage     | Persistence      | State persistence                            |
| Eslint           | Static testing   | Forces code style and tracks errors          |
| Husky            | Static testing   | Run commands after certain git hooks         |
| Prettier         | Static testing   | Takes care of code formatting                |
| Lint-stage       | Static testing   | Helps running linter only to staged git file |
| CommitLint       | Commit messages  | Enforces properly formatted commit messages  |

# Development tools

## Git hooks

Through `husky`, `eslint`, `prettier`, `typescript` and `lint-stage` code will be prettified and checked before certain commits:

- `pre-commit`: before a commit, code will automatically be 1.) prettified and 2.) checked against the linter.

-`pre-push`: before code will be pushed it will be 1.)prettified, 2.) checked against the linter and 3.)checked on typescript errors/warnings.

If you want to bypass these checks you can add `--no-verify` to the git command.

# Components

NativeBase is used a component libary in the project. To customize the components see their documentation:

- https://docs.nativebase.io/customizing-components
- The documentation includes also a link to all default styles for every component, as a reference on how to style every individual component.
