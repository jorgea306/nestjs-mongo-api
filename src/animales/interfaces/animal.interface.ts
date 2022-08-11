import { Document } from 'mongoose';

export interface IAnimal extends Document {
  id: string;
  id_senasa: string;
  tipo_animal: string;
  peso: number;
  nombre: string;
  tipo_dispositivo: string;
  numero_dispositivo: string;
  createAt?: Date;
}