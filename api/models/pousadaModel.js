import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';

//Lembrete: definir melhor maneira para modelar os tipos de pousadas mencionados no PDF original

export const Pousada = sequelize.define('Pousada', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    contato: { 
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nomeContato: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    custoMin: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    possuiCredencial: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    kmRef: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

});
