# Demo Auth0 Deployment Automation using GitHub Actions

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

## Auth0 Config

The sample deployment pipeline manages the following environment specific items:

1. Rule Configs
2. Custom DB Action Script Config Variables
3. Application Callback and Logout URLs
4. Hosted Login Page - Support URL