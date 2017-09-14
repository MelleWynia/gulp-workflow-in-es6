
1. Get useful notifications when something / compiling goes wrong (in pug, es6 or css)
2. Precompiled es6 will automatically be compiled (babel, in the `js` task)

# Getting started!

0. Clone the git project locally
1. Install ^v7 of [Node.js](https://nodejs.org) 
    - In case you’ve already installed Node.js, you may break older Node applications/workflows with the latest version. So in that case I recommend to install `n` which allows you to switch between Node versions. Run `npm install n -global` and `n 6.2.0`. From there you can just run `n` to switch between Node versions.
2. Run `npm install gulp-cli -global`
3. Run `npm install` to install all node modules locally
4. Run `gulp` to start the workflow (watch included). If you’re wondering what it's doing, run `gulp --tasks`. Once you’re done, run `gulp --build --minify` to create a dist version.

... or [create 1-2-3 even more tasks.](1-2-3-GO.md)


# Wishes

- Better notifications (nice, useful error messages)
- Integrate linting of stylus (+ checking css) and js
- Ideas..? Let me know at [info@mellewynia.nl](info@mellewynia.nl) or [@MelleWynia](http://twitter.com/MelleWynia)