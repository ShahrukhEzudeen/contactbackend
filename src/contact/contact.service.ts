import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly userRepository: Repository<Contact>,
  ) {}
  findAll(): Promise<Contact[]> {
      var result = this.userRepository.find()
    return result;
  }
remove(id: number) {
  return this.userRepository.delete(id);
}
  async getid(id: number) {
  var result = await this.userRepository.find({
    where:{
      id:id
    }
});
 
console.log(result);
  return result[0]
}


async update(id: number, contact: Partial<Contact>): Promise<Contact> {
  await this.userRepository.update(id, contact);
  return this.userRepository.findOneBy({ id });
}

async save( contact: Partial<Contact>): Promise<Contact> {
  return await this.userRepository.save(contact);
}

}