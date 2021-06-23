import {Cat} from './entities/cats.entity';

export const catsProviders = [
    {
        provide: 'CATS_REPOSITORY',
        useValue: Cat
    },
];