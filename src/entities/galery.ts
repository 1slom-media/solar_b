import { IsString, length } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn} from "typeorm";


@Entity({ name: "galery" })
export class GaleryEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 200 })
    @IsString()
    title: string

    @Column({ type: "varchar", length: 300 })
    @IsString()
    adress: string

    @Column({ type: "varchar", length:100})
    @IsString()
    year: string

    @Column({ type: "varchar", length:100})
    @IsString()
    energy_month: string

    @Column({ type: "text"})
    @IsString()
    image: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}