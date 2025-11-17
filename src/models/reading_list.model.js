import { DataTypes } from "sequelize";
import { sequelize } from "../repositories/db/connection.js";

export const ReadingList = sequelize.define(
    'ReadingList',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        tableName: 'reading_lists',
        timestamps: false
    }
);

export const ReadingListBook = sequelize.define(
    'ReadingListBook',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reading_list_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'reading_lists',
                key: 'id'
            }
        },
        google_book_id: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        added_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: 'reading_list_books',
        timestamps: false
    }
);
