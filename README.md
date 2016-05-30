0. Create, add and remove tasks the es6 way
1. Get useful notifications when something goes wrong (currently still bugged)
2. Precompiled es6 will automatically be compiled (in the `js` task)

# Get started...

1. Install ^v6 of [Node.js](https://nodejs.org) 
    - In case you’ve already installed Node.js, you may break older Node applications/workflows with the latest version. So in that case I recommend to install `n` which allows you to switch between Node versions. Run `npm install n -global` and `n 6.2.0`. From there you can just run `n` to switch between Node versions.
2. Run `npm install gulp-cli -global`
3. Run `npm install` to install all node modules locally
4. Run `gulp` to start the workflow (watch included). If you’re wondering what it's doing, run `gulp --tasks`. Once you’re done, run `gulp build` to get a version ready to distribute.

... or [create 1-2-3 even more tasks.](1-2-3-GO.md)

# So why... uhm...

#### Why haven't you created a function to import tasks?

Because: `import` (and `export`) statements “may only appear at top level.” And there’s a [good reason for that](http://stackoverflow.com/questions/34203325/why-must-export-import-declarations-be-on-top-level-in-es2015).

#### Why is there a notice to update the `graceful-fs` module? 

Because some of the dependencies are relying on older versions of `graceful-fs `. This won’t affect the workflow. Hopefully the creators of the packages will soon update their dependency trees.

# Wishes

- Better notifications (nice, useful error messages)
- Integrate linting of stylus (+ checking css) and js
- Ready-to-go `sass` task?
- Ideas..? Let me know at [info@mellewynia.nl](info@mellewynia.nl) or [@MelleWynia](http://twitter.com/MelleWynia)