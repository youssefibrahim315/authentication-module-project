import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { DatabaseModule } from '../database/database.module';
import { DatabaseService } from '../database/services/database/database.service';

@Module({
  imports:[DatabaseModule],
  controllers:[UsersController],
  providers: [UsersService,DatabaseService]
})
export class UsersModule {}
