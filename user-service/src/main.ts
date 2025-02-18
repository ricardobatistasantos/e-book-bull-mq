import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './presentation/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3004);
  console.log('🚀 API rodando em http://localhost:3004');
}
bootstrap();
// curl -X POST http://localhost:3004/persons \
//      -H "Content-Type: application/json" \
//      -d '{ "name": "João Silva", "email": "ricardobatista28@outlook.com" }'