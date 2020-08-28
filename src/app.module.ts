import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaController } from './maratona/maratona.controller';

@Module({
  imports: [],
  controllers: [AppController, MaratonaController],
  providers: [AppService],
})
export class AppModule {}
