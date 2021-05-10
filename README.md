# User Cards

## Functionality

User Cards is a vue app that demonstrates loading data from an external service, sorting it,

and adding a new record (on the front-end).

## Design decisions

### Inconsistent data format

Phone numbers are not consistently formatted. Website addresses are missing http/https.

We could apply a "fix" by formatting this data for presentation on the front-end, but this really should be handled in either the database or (worst case) at the services layer of the backend.

### Choosing what to present

We're showing most of the data that's returned to us from the API. We're not showing ids, geographic coordinates, and some of the additional company information because we're assuming this isn't interesting/useful to the user.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```
