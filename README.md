# jest-mock-node-env

Resets node environment after each test to the default (usually 'test').

## Getting started

### Install

```sh
yarn add --dev jest-mock-node-env
```

### Import in any test or at the top of your setup tests file

```ts
// setupTests.ts, some-test.spec.ts, some-test.test.ts, etc.
import 'jest-mock-node-env';
```
