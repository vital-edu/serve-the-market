# Serve the Market

## Instructions

To run this application you need only the radiks-server package installed and an instance of MongoDB that you can create locally or in the cloud (we just need a MongoDB URI to connect to).

To run in development mode (locally) you need to copy the file `.env.template` to `.env` (e.g.: `cp .env.template .env` ) and edit the *MONGODB_URI* (see the file *.env.template* to discover how it looks like) to point to your instance of the MongoDB.

After that you need to fetch the npm package and start the application in development mode:

```sh
yarn # to install the packages
yarn development # to run locally
```

To run in a PaaS as Heroku you just need to push the *package.json* file and configure the *MONGODB_URI* environment variable.
