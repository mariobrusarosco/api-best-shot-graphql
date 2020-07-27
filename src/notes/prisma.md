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
import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "",
  endpoint: "localhost:4466",
});
```

### Use a CLI

This CLI will fetch the schema for you. You need to pass the path where the generated scripts will be saved and also pass the endpoint that will server as base to prisma
identify what should be generated.

I need to create a `.graphqlconfig` file in the `root` level

`.graphqlconfig`

```json
{
  "projects": {
    "prisma-content": {
      "schemaPath": "src/generated/prisma.graphql",
      "extensions": {
        "endpoints": {
          "default": "http://localhost:4466"
        }
      }
    }
  }
}
```

### Using the bindings

The prisma instance have 'mutation' and 'query' props. These
props provide methods (promise) to perform mutations and queries.

```js
import { Prisma } from "prisma-binding";

prisma.query.users(null, "{ id name email }").then((data) => {
  console.log(data);
});

prisma.mutation.createPost(
  {
    data: {
      title: "Created via Prisma Binding",
      body: "Lorem ipsum",
      published: false,
      author: { connect: { id: "ckb5hnwc200350878x0s4vx0x" } },
    },
  },
  "{  id title body published author { name email } }"
);
```

### Passing to Prisma, the Selection of Fields of a Query

The content of a selection of fields of a query is inside the `info`. Pass it to the Prisma Promise.

Inside a `resolver`:

```js
  users(parent, args, { prisma }, info) {
    const opArgs = { ... };
    ...
    ...

    return prisma.query.users(opArgs, info);
  },
```

### Prisma Utils

#### Exists

Prisma give us the ability to check if somethings exists.

```js
prisma.exists
  .Post({
    id: "32489sa2397",
    author: {
      id: "4353932420",
    },
  })
  .then((exists) => exists);

// exists is a boolean
// We can pass every prop the Post model has
```

#### Query

Prisma give us some query util methods. We can use them inside a graphql 'where' clause

```js
prisma.query.users(
  {
    where: {
      name_contains: args.query,
    },
  },
  info
);

'name_contains' is automatically created because the User model has a 'name' field
```

```graphql
query {
  users(query: "a") {
    id
    name
    email
    posts {
      title
    }
  }
}
```

`a` will be passed inside of `args.query`

#### Conditional Query (OR, AND Operator)

```js
prisma.query.users({
  where: {
    OR: [
      {
        name_contains: args.query,
      },
      {
        email_contains: args.query,
      },
    ],
  },
});
```

`a` will be searched for in `name` field or `email` field

```graphql
query {
  users(query: "a") {
    id
    name
    email
    posts {
      title
    }
  }
}
```

#### Mutations with Prisma

```js
```

#### Relationship with Prisma

```js
```

### Relationship

```graphql
type User {
  id: ID! @unique
  name: String!
  email: String! @unique
  posts: [Post!]! @relation(name: "UserToPost", onDelete: CASCADE)
  comments: [Comment!]!
}
```
