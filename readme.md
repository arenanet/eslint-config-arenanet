eslint-config-arenanet
======================

ESLint config for ArenaNet JS code

## Install

`> npm install eslint-config-arenanet --save-dev`

## Usage

`> eslint -c arenanet <file>`

## Run tests

`> npm test`  
`> npm test -- all` (to show warnings)

## eslint-plugin-arenanet

### Backend rules

Default config setting to off. To apply it to `Code/` files, use `overrides` in `.eslintrc`.

```js
{
    overrides : [
        {
            files : "Code/**/*.js",
            plugins : [ "arenanet" ],
            rules {
                "arenanet/reply-with-request" : 1,
                "arenanet/use-strict-at-top-of-document": "warn"
            }
        }
    ]
}
```