# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

This project is based on the example application of the official angular web ["Tour of heroes"](https://angular.io/tutorial) but with a correct structuring of all its files and with some extra functionality added for production environments.

## Main project structure

- app/shared --> This is the module where I keep small stuff that every other module will need. I have 3 submodules there directives, components and pipes, just to keep things organized a little better.

- app/public --> In this module I keep public routes and top-level components.

- app/core --> Services and components that app needs (and cannot work without) go here.

- app/protected --> Similar to public, only for authorized users. This module has protected routes and top-level components.

more info --> [StackOverflow](https://stackoverflow.com/questions/42779871/angular-core-feature-shared-modules-what-goes-where)

## DB and microservices

To simulate the BD and microservices of the application [json-service](https://github.com/typicode/json-server) is being used, this allows to make the same http requests that we could make to a real system of microservices and stores the data that we introduce in a JSON. The commands for its installation and use are in the "src/db.json" or directly in the project github.


## Translations

For application translations [ngx-translate/core](https://github.com/ngx-translate/core#installation) is being used, for more information visit your github.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
