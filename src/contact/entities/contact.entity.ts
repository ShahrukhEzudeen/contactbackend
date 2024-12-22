
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('contact_list')
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  isFavorite: number;
}