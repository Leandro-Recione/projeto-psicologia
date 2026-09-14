import { Injectable } from '@nestjs/common';

@Injectable()
export class PsicologoService {


    oi(){
        return"a primeira rota deu certo";
    }
}
