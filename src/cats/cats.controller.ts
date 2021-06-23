import { Controller, Get } from '@nestjs/common';
import {CatsService} from './cats.service';
import {CreateCatDto} from './dto/create-cat.dto';
import {Cat} from './entities/cats.entity';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
    
    @Get()
    findAll() : Promise<Cat[]> {
        return this.catsService.findAll();
    }

}
