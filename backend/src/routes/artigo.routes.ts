import { Router } from "express";
import { ArtigoController } from "../controllers/artigo.controller";

const routes = Router();
const controller = new ArtigoController();

routes.post("/artigos", controller.create);
routes.get("/artigos", controller.list);
routes.get("/artigos/:id", controller.show);
routes.put("/artigos/:id", controller.update);
routes.delete("?artigos/:id", controller.delete);

export default routes;