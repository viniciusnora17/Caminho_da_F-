import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';


//Decidir qual o melhor identificador para ramais
//Região ou ID numérico.
//Solução para PDF - Integração com API do Wordpress

export const Ramal = sequelize.define('Ramais', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cityRegion: {
        type: DataTypes.STRING,
        allowNull: false
    },
});