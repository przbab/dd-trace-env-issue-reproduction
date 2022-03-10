# Repo to visualize dd-trace issue

Issue:
https://github.com/DataDog/dd-trace-js/issues/1904

Issue appears from version `2.2.1` up when `NODE_ENV` is set to anything other than `production`.

To reproduce:
1. `npm ci`
2. `npm run build`
3. `npm run start`
4. Enter `localhost:3000` in a browser.

You will see the 500 error and `TypeError: ctx.res.end is not a function` in the server's console. The `ctx.res` object is replaced by proxy that doesn't proxy `res.end` method.

There are a few more commands to show that it works without `dd-trace` (`npm run startWithoutDDTrace`) and with NODE_ENV set to `production` (`npm run startWithProductionEnv`).
