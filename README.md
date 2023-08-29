# TaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

Nodejs version 18.16.1

npm 9.8.1

## Lancement application

```shell
ng build
```

Le dossier dist contient toute l'application en fichiers compilés. On va utiliser ce dossier pour héberger notre application en production ou en recette.

## Outillage

Yarn version 1.22.19

Compodoc version 1.1.21

## Observable HTTP request

```js
getTasks(term: string): Observable<Task[]> {
  let apiURL = 'https://domain.data?param=test';
  return this.http.get(apiURL)
      .map(res => {
        return res.json().results.map(item => {
          return new Task(
              item.titre,
              item.description,
              item.status,
              item.createdAt,
          );
        });
      });
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
