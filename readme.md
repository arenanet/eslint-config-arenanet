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

### reply-with-request

Default config setting to off. To apply it to `Code/` files, use `overrides` in `.eslintrc`.

```
{
    overrides : [
        {
            files : "Code/**/*.js,
            plugins : [ "arenanet" ],
            "rules" {
                "arenanet/reply-with-request" : 1
            }
        }
    ]
}
```