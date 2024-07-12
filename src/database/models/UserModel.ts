import { DataTypes, Model, Optional } from "sequelize";
import todoSequelize from "../setup/database";

interface UserAttributes {
  id: number;
  email: string;
  name: string;
  password: string;
  profileImgUrl?: string;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "profileImgUrl"> {}

class UserModel
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public email!: string;
  public name!: string;
  public password!: string;
  public profileImgUrl?: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "Users",
    defaultScope: { attributes: { exclude: ["password"] } },
    scopes: {
      allData: { attributes: { exclude: [] } },
    },
    sequelize: todoSequelize,
  }
);

export default UserModel;
