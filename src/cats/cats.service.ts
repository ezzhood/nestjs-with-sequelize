import {Injectable, Inject} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import {Cat} from './entities/cats.entity';

@Injectable()
export class CatsService {
    constructor(
        @Inject('CATS_REPOSITORY')
        private catsRepository: typeof Cat
    ) {}

    async findAll(): Promise<Cat[]> {
        return this.catsRepository.findAll<Cat>();
    }
}