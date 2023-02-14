import { Module } from '@nestjs/common';
import { DatabaseService } from './services/database/database.service';

@Module({
    imports: [],
    controllers: [],
    providers: [DatabaseService],
})export class DatabaseModule {}
