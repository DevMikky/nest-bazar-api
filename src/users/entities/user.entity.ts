import { UserRoles } from 'src/utility/common/user-roles.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'users'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    email: string;
    @Column({type:'enum',enum:UserRoles,array:true,default:[UserRoles.USER]})
    roles:UserRoles[]
    @Column()
    name: string;
    @Column()
    lastname: string;
    @Column()
    phone: string;
    @Column()
    address: string;
    @Column()
    city: string;
    @Column()
    country: string;
    @Column()
    postalCode: string;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
