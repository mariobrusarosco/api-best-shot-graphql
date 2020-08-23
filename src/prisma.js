import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://localhost:4466",
  secret: "this_is_prisma_secret",
});

export { prisma as default };

// prisma.query.users(null, "{ id name email }").then((data) => {
//   console.log(JSON.stringify(data, null, 2));
// });

// prisma.query.comments(null, "{ id text author { id name } }").then((data) => {
//   console.log(JSON.stringify(data, null, 2));
// });

// prisma.mutation.createPost(
//   {
//     data: {
//       title: "Created via Prisma Binding",
//       body: "Lorem ipsum",
//       published: false,
//       author: { connect: { id: "ckb5hnwc200350878x0s4vx0x" } },
//     },
//   },
//   "{  id title body published author { name email } }"
// );
