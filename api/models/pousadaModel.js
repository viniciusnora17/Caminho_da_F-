import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';

export const Pousada = sequelize.define('Pousada', {
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
    type: {
        type: DataTypes.STRING(100),
        allowNull: false
    }

});
Pousada.belongsTo(Ramal, { foreignKey: 'ramalId', as: 'ramal' });
Pousada.belongsToMany(Atributo, { through: 'PousadaAtributos', as: 'atributos', foreignKey: 'pousadaId' });