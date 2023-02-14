import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common/decorators';
import { DatabaseService } from 'src/modules/database/services/database/database.service';
import { createUsersDto } from '../dtos/create.dto';
import { updateUsersDto } from '../dtos/update.dto';

@Controller('users')
export class UsersController {
    constructor(private DatabaseService: DatabaseService) { }

    @Get(':id')
    finOne() {
        return "finOne"
    }
    @Get()
    finAll() {
        return "finAll"
    }
    @Post()
    create(@Body() body: createUsersDto) {
        return "create"
    }
    @Patch(':id')
    update(@Param() userId: string, @Body() body: updateUsersDto) {
        return "update"
    }
    @Delete(':userId')
    deleteOne(@Param('userId') userId: string) {
        return "deleteOne"
    }

}
