__CARE: THIS IS STILL A WiP!!1__

0. Separation of tasks: peace of mind
1. A watch that actually watches
2. Get a notifications when something goes wrong

# Get started...

1. Install [Node.js](#//TODO) from here (which comes with NPM) and then run:
	a. `npm install -g n` (for switching between node versions)
	b. `npm install gulp-cli -global` //TODO
	d. npm babel-cli install //TODO
2. Do a `npm install` to install all node modules locally
3. Run `gulp` to start the watch

# Commands

Start the workflow with `gulp` and a BrowserSync server will fire up. All files will be generated at a new (cleaned) the /test folder. Fire `gulp build` up for a clean build and please check `gulp --tasks` for an oversight of all tasks.

## Why

#### Why haven't you created a function to import tasks?

Because: `import` (and `export`) statements may only appear at the top level. And there’s a [good reason for that](http://stackoverflow.com/questions/34203325/why-must-export-import-declarations-be-on-top-level-in-es2015).

#### Why all these depreciating warnings?

Because some of the dependencies that are being called in the gulp (tasks) use a depreciated version of the NPM `graceful-fs `. This problem should solve itself, and won't be a problem as long as you're on Node.js v6.x.x.