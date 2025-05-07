import { AppDataSource } from "../database/data-source";
import { Artigo } from "../entities/Artigo";
import { Repository } from "typeorm";

export class ArtigoService {
    private repo: Repository<Artigo>;

    constructor() {
        this.repo = AppDataSource.getRepository(Artigo);
    }

    create(data: Partial<Artigo>) {
        const artigo = this.repo.create(data);
        return this.repo.save(artigo)
    }

    list() {
        return this.repo.find();
    }

    show(id: number) {
        return this.repo.findOneBy({ id })
    }

    update(id: number, data: Partial<Artigo>) {
        return this.repo.update({ id }, data) 
    }

    delete (id: number) {
        return this.repo.delete({ id })
    }
}

