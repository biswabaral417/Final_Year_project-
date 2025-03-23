import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface UserAttributes {
  id: string;
  name: string;
  email: string;
}

class User extends Model<UserAttributes> {}

User.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  { sequelize, modelName: 'User' }
);

export default User;
