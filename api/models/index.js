import sequelize from "../database/db.js";
import Ramal from "./ramalModel.js";
import Pousada from "./pousadaModel.js";
import Atributos from "./attributeModel.js";
import Pagamentos from "./paymentMethodModel.js";

Ramal.hasMany(Pousada, { foreignKey: 'pousadaId', as: 'pousadas' });

Pousada.belongsTo(Ramal, { foreignKey: 'ramalId', as: 'ramal' });
Pousada.belongsToMany(Atributo, { through: 'PousadaAtributos', as: 'atributos', foreignKey: 'pousadaId' });
Pousada.belongsToMany(Pagamentos, { through: 'PousadaPagamentos', as: 'pagamentos', foreignKey: 'pousadaId' });

Atributos.belongsToMany(Pousada, { through: 'PousadaAtributos', as: 'pousadas', foreignKey: 'atributoId' });

// Pagamentos.belongsToMany(Pousada, { through: 'PousadaPagamentos', as: 'pousadas', foreignKey: 'pagamentoId' });

export { sequelize, Ramal, Pousada, Atributos };