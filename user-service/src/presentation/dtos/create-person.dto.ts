import { z } from 'zod';

export const CreatePersonSchema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'E-mail inválido' }),
});

export type CreatePersonDTO = z.infer<typeof CreatePersonSchema>;