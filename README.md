# Tech Stack

| Library          | Category          | Description                                  |
| ---------------- | ----------------- | -------------------------------------------- |
| React Native     | Mobile Framework  | Cross-platform mobile framework              |
| React            | UI Library        | UI framework                                 |
| Expo             | SDK               | React Native framework                       |
| TypeScript       | Language          | Static typechecking                          |
| React Navigation | Navigation        | Navigation framework                         |
| NativeBase       | Component library | UI component library                         |
| Eslint           | Static testing    | Forces code style and tracks errors          |
| Husky            | Static testing    | Run commands after certain git hooks         |
| Prettier         | Static testing    | Takes care of code formatting                |
| Lint-stage       | Static testing    | Helps running linter only to staged git file |
| CommitLint       | Static testing    | Enforces properly formatted commit messages  |
| React Hook Form  | Forms             | To handle form state                         |
| Yup              | Forms             | To handle form validation                    |
| AsyncStorage     | State management  | State persistence                            |
| Jest             | Testing           | Standard test runner for JS apps             |
| date-fns         | Date library      | Date library                                 |

# Development tools

## Git hooks

Through `husky`, `eslint`, `prettier`, `typescript` and `lint-stage` code will be prettified and checked before certain commits:

- `pre-commit`: before a commit, code will automatically be 1.) prettified and 2.) checked against the linter.

-`pre-push`: before code will be pushed it will be 1.)prettified, 2.) checked against the linter and 3.)checked on typescript errors/warnings.

# Styling

NativeBase is used a component libary in the project. To customize the components see their documentation:

- https://docs.nativebase.io/customizing-components
- The documentation includes also a link to all default styles for every component, as a reference on how to style every individual component.
