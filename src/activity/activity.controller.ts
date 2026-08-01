import { Controller, Get, Post, Patch, Delete, Body } from "@nestjs/common";
import { ActivityService } from "./activity.service";
import { CreateActivityDto } from "./dto/create-activity.dto";

@Controller('activity')
export class ActivityController {
    constructor(private readonly activityService: ActivityService) {}

    // Functions
    @Get()
    async findAll() {
        return await this.activityService.findAll();
    }

    @Post()
    create(@Body() createActivityDto: CreateActivityDto) {
        return this.activityService.create(createActivityDto);
    }
}