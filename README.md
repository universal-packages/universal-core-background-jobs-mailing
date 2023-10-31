# [Deprecated] Core Background Jobs Mailing

[![npm version](https://badge.fury.io/js/@universal-packages%2Fcore-background-jobs-mailing.svg)](https://www.npmjs.com/package/@universal-packages/core-background-jobs-mailing)
[![Testing](https://github.com/universal-packages/universal-core-background-jobs-mailing/actions/workflows/testing.yml/badge.svg)](https://github.com/universal-packages/universal-core-background-jobs-mailing/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/universal-packages/universal-core-background-jobs-mailing/branch/main/graph/badge.svg?token=CXPJSN8IGL)](https://codecov.io/gh/universal-packages/universal-core-background-jobs-mailing)

[Background Jobs Mailing](https://github.com/universal-packages/universal-background-jobs-mailing) universal-core module abstraction.

> Deprecated: Mailing for background jobs is a loader now, no need for core to load it as a module. 

## Install

```shell
npm install @universal-packages/core-background-jobs-mailing

npm install @universal-packages/core-background-jobs
```

## Initialization

```shell
ucore exec mailing-task init
```
## Global

Core expose `Mailing` as the global subject if core `modulesAsGlobals` config is true.

```js
mailingSubject.send()
```

```js
core.coreModules.mailingModule.subject.send()
```

## Typescript

In order for typescript to see the global types you need to reference the types somewhere in your project, normally `./src/globals.d.ts`.

```ts
/// <reference types="@universal-packages/core-background-jobs-mailing" />
```

This library is developed in TypeScript and shipped fully typed.
## Contributing

The development of this library happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving this library.

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing Guide](./CONTRIBUTING.md)

### License

[MIT licensed](./LICENSE).
