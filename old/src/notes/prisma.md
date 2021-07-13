## Installing Prisma

```bash
  yarn add prisma -D
```

## Initializing a project

```bash
  prisma init project_name
```

## Start Docker

```bash
  sudo docker-compose up -d
```

## Deploy the project

```bash
  prisma deploy
```

## Connect Prisma to a Node Project

### Create Bindings

Node methods to interact with the Prisma Graphql API

```bash
  yarn add prisma-binding -D
```

Create a prisma.js to connect the node app to Prisma Graphql API

```js
import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
  typeDefs: '',
  endpoint: 'localhost:4466'
})
```

### Use a CLI

This CLI will fetch the schema for me

I need to create a `.graphqlconfig` file in the `root` level

`.graphqlconfig`

```json
{}
```

```bash
  yarn add prisma -D
```
