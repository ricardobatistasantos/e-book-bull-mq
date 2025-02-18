import { Module } from '@nestjs/common';
import { CreatePersonUseCase } from './../application/use-cases/create-person.use-case';
import { BullMqModule } from './../infra/bull-mq.module';
import { PersonController } from './controllers/person.controller';

@Module({
  imports:[BullMqModule],
  controllers: [PersonController],
  providers: [CreatePersonUseCase,],
})
export class AppModule {}