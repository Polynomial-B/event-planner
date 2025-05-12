import { events } from "@/lib/seed-data";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  for (const event of events) {
    const result = await prisma.eventPlannerEvent.upsert({
      // upsert avoids creating duplicate unlike createMany //
      where: { id: event.id },
      update: {},
      create: event,
    });
    console.log(`Created event with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
