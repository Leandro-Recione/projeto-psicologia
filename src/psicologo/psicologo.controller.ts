import { Controller, Get } from '@nestjs/common';
import { PsicologoService } from './psicologo.service';

@Controller('psicologo')
export class PsicologoController {
    constructor(private readonly psicologoService: PsicologoService) {}

    @Get()
    teste(){
        return this.psicologoService.oi();
    }
}
