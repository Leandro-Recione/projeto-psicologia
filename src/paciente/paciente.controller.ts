import { Controller, Get } from '@nestjs/common';

@Controller('paciente')
export class PacienteController {


@Get("/teste")
getTeste(){
    return " rota de testes do paciente esta funcionando";
}
}
