# StockFront

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
```
// node
$ git clone git://github.com/creationix/nvm.git ~/.nvm
$ source ~/.nvm/nvm.sh
$ nvm install 6.9.5

$ node -v
v6.9.5

$ npm -v
3.10.10

// angular-cli
$ npm install -g @angular/cli

$ git clone https://github.com/kunitarosu/stock_front.git
$ cd stock_front
$ npm install --save-dev @angular/cli@latest
$ npm install

// highchairs
$ npm install angular2-highcharts --save

// Before -> Afterに編集
$ vi angular-cli.json

Before:

"environments": {
  "source": "environments/environment.ts",
  "dev": "environments/environment.ts",
  "prod": "environments/environment.prod.ts"
}


After:

"environmentSource": "environments/environment.ts",
"environments": {
  "dev": "environments/environment.ts",
  "prod": "environments/environment.prod.ts"
}

// 実行
$ ng serve

// 以下のエラーが出たらng serveしたままapp.module.tsを更新するとcompileが通って実行できるはず。原因は不明…
ERROR in Error encountered resolving symbol values statically. Calling function 'ChartModule', function calls are not supported. Consider replacing the function or lambda with a reference to an exported function, resolving symbol AppModule in /home/stock/workspace/stock_front/src/app/app.module.ts, resolving symbol AppModule in /home/stock/workspace/stock_front/src/app/app.module.ts
webpack: Failed to compile.

$ ブラウザから -> http://localhost:4200
```
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
