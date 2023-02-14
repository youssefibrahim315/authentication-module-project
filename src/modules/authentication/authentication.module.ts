import { Module } from '@nestjs/common';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationController } from './controller/authentication.controller';
import { DatabaseModule } from '../database/database.module';
import { DatabaseService } from '../database/services/database/database.service';

@Module({
    imports: [DatabaseModule],
    controllers: [AuthenticationController],
    providers: [AuthenticationService,DatabaseService],
})
export class AuthenticationModule {}
