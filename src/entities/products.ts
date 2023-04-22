import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from "./category";
import { ImagesEntity } from "./images";


@Entity({ name: "products" })
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title: string

    @Column({ type: "text"})
    @IsString()
    description_uz: string

    @Column({ type: "text"})
    @IsString()
    description_en: string

    @Column({ type: "text"})
    @IsString()
    description_ru: string


    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @ManyToOne(()=>CategoryEntity,(category)=>category.products)
    category:CategoryEntity

    @OneToMany(()=>ImagesEntity,(images)=>images.products)
    images:ImagesEntity[]
}