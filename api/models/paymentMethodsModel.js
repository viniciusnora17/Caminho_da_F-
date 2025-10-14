import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';

export const Pagamentos = sequelize.define('Pagamentos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
});

