import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';

//Lembrete: definir melhor maneira para modelar os tipos de pousadas mencionados no PDF original

export const guestHouse = sequelize.define('GuestHouse', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    uf: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    adress: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phoneNumber: { 
        type: DataTypes.STRING(100),
        allowNull: false
    },
    contactName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    minCost: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    hasCredential: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    kmRef: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

});
