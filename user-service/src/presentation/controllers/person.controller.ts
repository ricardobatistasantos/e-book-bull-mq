import { Controller, Post, Body } from '@nestjs/common';
import { CreatePersonUseCase } from '../../application/use-cases/create-person.use-case';
import { CreatePersonSchema, CreatePersonDTO } from '../dtos/create-person.dto';

@Controller('persons')
export class PersonController {
  constructor(private readonly createPersonUseCase: CreatePersonUseCase) {}

  @Post()
  async create(@Body() body: CreatePersonDTO) {
    // Validação com Zod
    const result = CreatePersonSchema.safeParse(body);
    if (!result.success) {
      return { error: result.error.errors };
    }

    return await this.createPersonUseCase.execute(result.data);
  }
}