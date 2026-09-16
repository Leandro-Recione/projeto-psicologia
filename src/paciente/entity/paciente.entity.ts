import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Paciente {
@PrimaryGeneratedColumn()
id: number

@Column()
nome: string

@Column()
email: string

@Column()
dataNascimento: Date

@Column()
cpf: string

@Column()
telefone: string

@Column()
foto: string

@Column()
descricaoCaso: string

@Column()
motivoAcompanhamento: string

}