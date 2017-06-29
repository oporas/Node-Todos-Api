# Node-Todos-Api
Practice repo for the-complete-nodejs-developer-course-2

## Install

`npm install`

## Create config.json

Create new json file server/config/config.json
Example:

```json
{
    "test": {
        "PORT": 3000,
        "MONGODB_URI": "mongodb://localhost:27017/TodoAppTest",
        "JWT_SECRET": "WOW-SUCH-SECRET"
    },
    "development": {
        "PORT": 3000,
        "MONGODB_URI": "mongodb://localhost:27017/TodoApp",
        "JWT_SECRET": "WOW-SUCH-SECRET"
    }
}
```

## Usage

`npm start`

## Test

`npm run test-watch`
