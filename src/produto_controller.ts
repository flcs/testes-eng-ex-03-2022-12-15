import { Request, Response } from "express";

class ProdutoController {
    get(req: Request, resp: Response) {
        const { id } = req.params;

        console.log("Request.Params.id: ", id);
        return resp.status(200).json({ description: 'porca' });
    }
}

export { ProdutoController }