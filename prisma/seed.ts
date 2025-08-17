import prisma from "./lib/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Abdallah",
        email: "abdallah@gmail.com",
      },
      {
        name: "Zaghloul",
        email: "zaghloul@gmail.com",
      },
    ],
  });
}

seed()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
