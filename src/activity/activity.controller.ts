import { Controller, Get, Post, Patch, Delete } from "@nestjs/common";
import { ActivityService } from "./activity.service";

@Controller('activity')
export class ActivityController {
    constructor(private readonly activityService: ActivityService) {}

    // Functions
    @Get()
    async findAll() {
        return await this.activityService.findAll();
    }
}