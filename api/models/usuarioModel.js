import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';

//Lembrete: definir melhor maneira para modelar os tipos de pousadas mencionados no PDF original

export const Pousada = sequelize.define('Pousada', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});