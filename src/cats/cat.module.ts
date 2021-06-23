import { Module } from '@nestjs/common';
import {CatsService} from './cats.service';
import { CatsController } from './cats.controller';
import {catsProviders} from './cats.provider';
import {DatabaseModule} from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CatsController],
    providers: [
        CatsService,
        ...catsProviders
    ],
})
export class CatModule {}
