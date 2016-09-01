# Sierra Bonus Mission Q3

### WIP

The build structure was based on this [article](http://paislee.io/a-healthy-gulp-setup-for-angularjs-projects/).

**TODO**

- Add styling (SASS?)
- Add gulp watches (see above article)
- Support unit testing
- Support e2e testing
- Fix gulp uglify
- Setup ASOS mock server (see above article) 


## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].


### Install Dependencies

1. Install [Node.js](https://nodejs.org/en/)
2. Install bower as a global npm module: `sudo npm install bower -g`
3. Install gulp as a global npm module: `sudo npm install gulp -g`
4. Go to project root folder
5. Execute: `npm install`
6. Execute: `bower install`

### Build

Development:
```
gulp build-app-dev
```

Production:
```
gulp build-app-prod
```

### Run in Development

1. Run `npm start`
2. Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application 
running.

### Unit Testing
**TODO: Not tested yet**
 
We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`.
- A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers,
  others can be captured by loading the same URL or by changing the `karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.

### End-to-End Testing
**TODO: Not tested yet**

We recommend using [Protractor][protractor] for end-to-end (e2e) testing.

It requires a webserver that serves the application. See the
_Running the Application during Development_ section, above.

- Serve the application with: `npm start`
- In a separate terminal/command line window run the e2e tests: `npm run protractor`.
- Protractor will execute the e2e test scripts against the web application itself. The project is
  set up to run the tests on Chrome directly. If you want to run against other browsers, you must 
  modify the configuration at `e2e-tests/protractor-conf.js`.
