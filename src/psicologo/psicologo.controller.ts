import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PsicologoService } from './psicologo.service';

@Controller('psicologo')
export class PsicologoController {
    constructor(private readonly psicologoService: PsicologoService) {}

  @Get()
  findAll(){
    return this.psicologoService.findall();
  }

  @Get(":id")
  findOne(@Param('id') id: string){
    return this.psicologoService.findone(id);
  }

  @Post()
  create(){}

  @Put()
  update(){}

  @Delete()
  delete(){}

}
