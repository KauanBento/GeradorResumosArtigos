import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Artigo {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true})
  titulo!: string

  @Column({ nullable: true})
  autor!: string

  @Column({ nullable: true})
  fonte!: string

  @Column({ unique: true })
  url!: string

  @Column("longtext")
  conteudo!: string

  @Column("longtext")
  resumo!: string
}