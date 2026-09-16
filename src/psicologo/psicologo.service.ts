import { Injectable } from '@nestjs/common';
import { Psicologo } from './entity/psicologo.entity';

@Injectable()
export class PsicologoService {

findall(){
    return Psicologo;
}

findone(){}

create(){}

update(){}

delete(){}
}
