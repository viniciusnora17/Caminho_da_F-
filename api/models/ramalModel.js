import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';


//Decidir qual o melhor identificador para ramais
//Região ou ID numérico.

export const Ramal = sequelize.define('Ramais', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Ramal.hasMany(Pousada, { foreignKey: 'pousadaId', as: 'pousadas' });