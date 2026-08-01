import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateActivityDto } from "./dto/create-activity.dto";

@Injectable()
export class ActivityService {
    constructor(private prisma: PrismaService) {}

    // Queries
    async findAll() {
        return await this.prisma.activity.findMany();
    }

    async create(createActivityDto: CreateActivityDto) {
        return await this.prisma.activity.create({
            data: createActivityDto,
        })
    }
}