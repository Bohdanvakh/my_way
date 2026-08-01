import { Controller, Get, Post, Patch, Delete } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Controller('activity')
export class ActivityController {
    constructor(private prisma: PrismaService) {}

    // Functions
}