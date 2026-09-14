import { Module } from '@nestjs/common';
import { PsicologoController } from './psicologo.controller';
import { PsicologoService } from './psicologo.service';
import { Psicologo } from './entity/psicologo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Psicologo])],
  controllers: [PsicologoController],
  providers: [PsicologoService]
})
export class PsicologoModule {}
