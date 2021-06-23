import {Sequelize} from 'sequelize-typescript';
import {Cat} from '../cats/entities/cats.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'root',
                database: 'test_db'
            });
            sequelize.addModels([Cat]);
            await sequelize.sync();
            return sequelize;
        }
    }
]