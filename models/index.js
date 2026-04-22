import sequelize from "../database/db.js";
import Ramal from "./ramalModel.js";
import GuestHouse from "./guestHouseModel.js";
import Attributes from "./attributeModel.js";
import Payments from "./paymentMethodModel.js";

Ramal.hasMany(GuestHouse, { foreignKey: 'ramalId', as: 'guestHouses' });

GuestHouse.belongsTo(Ramal, { foreignKey: 'ramalId', as: 'ramal' });
GuestHouse.belongsToMany(Attributes, { through: 'guestHouseAttributes', as: 'attributes', foreignKey: 'guestHouseId' });
GuestHouse.belongsToMany(Payments, { through: 'guestHousePayments', as: 'payments', foreignKey: 'guestHouseId' });

Attributes.belongsToMany(GuestHouse, { through: 'guestHouseAttributes', as: 'guestHouses', foreignKey: 'attributeId' });

Payments.belongsToMany(GuestHouse, { through: 'guestHousePayments', as: 'guestHouses', foreignKey: 'paymentId' });

export { sequelize, Ramal, GuestHouse, Attributes, Payments };