import { PrismaClient } from '@prisma/client';
const client = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://neondb_owner:YJgUiMp7Nkt2@ep-tight-queen-a740l0ab-pooler.ap-southeast-2.aws.neon.tech/neondb?sslmode=require"
    }
  }
});

export default client;