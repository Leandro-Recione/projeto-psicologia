import { Injectable } from '@nestjs/common';
import { Psicologo } from './entity/psicologo.entity';

@Injectable()
export class PsicologoService {

findall(){
return [{ id: 1, nome: 'Leandro' },
        { id: 2, nome: 'Vanessa'},
        { id: 3, nome: 'Andressa' },
        ];
}

findone(id: string){
    return "tarefa 1" + id;
}

create(){}

update(){}

delete(){}
}
