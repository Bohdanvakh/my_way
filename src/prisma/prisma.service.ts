import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const adapter = new PrismaMariaDb({
      host: process.env.DB_HOST ?? 'localhost',
      port: 3306,
      user: process.env.DB_USER ?? 'appuser',
      password: process.env.DB_PASSWORD ?? 'apppass',
      database: process.env.DB_NAME ?? 'myapp',
      allowPublicKeyRetrieval: true, // TODO: fix that before deploy to prod env.
    });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}