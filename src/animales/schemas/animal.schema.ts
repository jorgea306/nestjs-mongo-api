import { Schema } from 'mongoose';


export const AnimalSchema = new Schema({
  id_senasa: {
    type: String,
    require: true,
    minLength: [16, 'La cantidad permitida es de 16 Caracteres'],
    maxLength: [16, 'La cantidad permitida es de 16 Caracteres'],
    unique: true
  },
  tipo_animal: {
    type: String,
    require: [true, 'El parametro tipo de animal es obligatorio'],
  },
  peso: {
    type: Number,
    require: [true, 'El parametro peso es obligatorio y expresado en Kg'],
  },
  nombre: {
    type: String,
    require: [true, 'El parametro nombre es obligatorio'],
    maxLength: [200, 'La cantidad maxima permitida es de 200 Caracteres'],
  },
  tipo_dispositivo: {
    type:String,
    require: [true, 'El parametro tipo de dispositivo es obligatorio'],
  },
  numero_dispositivo: {
    type: String,
    minLength: [8, 'La cantidad permitida es de 8 Caracteres'],
    maxLength: [8, 'La cantidad permitida es de 8 Caracteres'],
    require: [true, 'El parametro numero de dispositivo es obligatorio'],
    unique: [true, 'El parametro numero de dispositivo debe ser unico']
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
