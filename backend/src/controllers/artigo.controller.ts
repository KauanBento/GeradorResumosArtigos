import { Request, Response } from "express";
import { ArtigoService } from "../services/artigo.service";

export class ArtigoController {
    private service = new ArtigoService();

    async create(req: Request, res: Response) {
        const artigo = await this.service.create(req.body);
        return res.status(201).json(artigo);
    }

    async list(res: Response) {
        const artigos = await this.service.list();
        return res.json(artigos);
    }

    async show(req: Request, res: Response) {
        const artigo = await this.service.show(Number(req.params['id']));
        if (!artigo) return res.status(404).json({ mensagem: "Artigo não encontrado!"});
        return res.json(artigo);
    }

    async update(req: Request, res: Response) {
        const result = await this.service.update(Number(req.params['id']), req.body);
        return res.json(result);
    }

    async delete(req: Request, res: Response) {
        await this.service.delete(Number(req.params['id']));
        return res.status(204).send();
    }
}