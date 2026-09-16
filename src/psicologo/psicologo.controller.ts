import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PsicologoService } from './psicologo.service';

@Controller('psicologo')
export class PsicologoController {
    constructor(private readonly psicologoService: PsicologoService) {}

  @Get()
  findAll(){
    return this.psicologoService.findall();
  }

  @Get()
  findOne(){}

  @Post()
  create(){}

  @Put()
  update(){}

  @Delete()
  delete(){}

}
