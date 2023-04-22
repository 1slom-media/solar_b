import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { GaleryEntity } from '../entities/galery';

class GaleryController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(GaleryEntity ).find());
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(GaleryEntity ).find({where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { title,year,adress,energy_month,image } = req.body

            const galery = await AppDataSource.getRepository(GaleryEntity ).createQueryBuilder().insert().into(GaleryEntity ).values({ title,year,adress,energy_month,image}).returning("*").execute()

            res.json({
                status: 201,
                message: "galery created",
                data: galery.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const { title,year,adress,energy_month,image} = req.body
            const { id } = req.params

            const galery = await AppDataSource.getRepository(GaleryEntity ).createQueryBuilder().update(GaleryEntity )
                .set({ title,year,adress,energy_month,image })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "galery updated",
                data: galery.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const galery = await AppDataSource.getRepository(GaleryEntity ).createQueryBuilder().delete().from(GaleryEntity ).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "galery deleted",
                data: galery.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new GaleryController();