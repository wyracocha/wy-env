# Why another config loarder?
wy-env loads a configuration file from the root of your project `(config.json)`, but if you want, send the path of your configuration file. <ENTER>

Here whould be your env vars like PORT, DB_URI etc.
In fact, you can use development, qa or production environment in the same file using json format. <ENTER>

Remember, we use async/await and promises.

In the code below we will use `Restify` and `wy-env` modules

```
'use strict'
const Restify = require('restify')
const WyEnv = require('wy-env')

const Server = Restify.createServer({
  name: 'restify_api'
})
async function Start () {
  try {
    await WyEnv() // optional, send the path of your config file as a string
    Server.listen(process.env.PORT, (e) => {
      console.log('server running')
    })
  } catch (e) {
    throw e
  }
}

Start()
```

and it whould be your `config.json` file

````
{
  "development": {
    "PORT": 4040,
    "MONGO_URI":"YOUR_MONGODB_URI_FOR_DEV"
  },
  "qa": {
    "PORT": 4041,
    "MONGO_URI":"YOUR_MONGODB_URI_FOR_QA"
  },
  "production": {
    "PORT": 4042,
    "MONGO_URI":"YOUR_MONGODB_URI_FOR_PROD"
  }
}

```
NOTE
You must follow the json example, if you can change the loaded section, only set the `process.env.NODE_ENV` with the name of your desired env, in our case should be 'development', 'qa' or 'production'