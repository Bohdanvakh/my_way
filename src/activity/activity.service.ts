import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ActivityService {
    constructor(private prisma: PrismaService) {}

    // Queries
    async findAll() {
        return await this.prisma.activity.findMany();
    }
}