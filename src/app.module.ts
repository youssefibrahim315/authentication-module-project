import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DatabaseModule,AuthenticationModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
