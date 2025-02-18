import { Injectable, Inject } from '@nestjs/common';
import { BullMqManager } from '../../infra/bull-mq.manager';
import { CreatePersonDTO } from '../../presentation/dtos/create-person.dto';

@Injectable()
export class CreatePersonUseCase {
  constructor(@Inject('BULL_MQ') private readonly bullMqManager: BullMqManager) {}

  async execute(person: CreatePersonDTO) {
    console.log(`👤 Cadastrando pessoa: ${person.name}`);

    // Simula o cadastro (normalmente seria um banco de dados)
    const userId = Math.floor(Math.random() * 1000); // Simula um ID gerado

    // Envia e-mail para a fila
    await this.bullMqManager.addJob('email-queue', 'send-email', {
      to: person.email,
      subject: 'Bem-vindo!',
      text: `Olá ${person.name}, bem-vindo ao sistema!`,
    });

    console.log(`📩 E-mail enfileirado para ${person.email}`);

    return { id: userId, ...person };
  }
}