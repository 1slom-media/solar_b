import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,OneToMany} from "typeorm";
import { ProductsEntity } from "./products";


@Entity({ name: "category" })
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 100 })
    @IsString()
    category_name: string

    @Column({ type: "varchar", length: 100,nullable:true })
    @IsString()
    category_name_en: string

    @Column({ type: "varchar", length: 100,nullable:true })
    @IsString()
    category_name_uz: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @OneToMany(()=>ProductsEntity,(products)=>products.category)
    products:ProductsEntity[]
}