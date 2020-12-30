# Demo Auth0 deployment automation using GitHub Actions

## Table of Contents

- [About](#about)

## About <a name = "about"></a>

Demo - Auth0 deployment automation using GitHub Actions

Whenever a change is pushed to the `env/dev` branch, the GH `action` will be triggerred which will then:

1. Clone this repository on the worker machine and cd to it.
2. Install `NPM` and `NodeJS` on the worker machine.
3. Install `a0-deploy-cli` on the worker machine.
4. Inject values for environment specific variables from GH environment secrets.
5. Run `a0-deploy-cli` import to update the target tenant configuration.
