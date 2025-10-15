import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';

//Solução para PDF - Integração com API do Wordpress
//Verificar se arquivo está hosteado permanentemente com Wordpress

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