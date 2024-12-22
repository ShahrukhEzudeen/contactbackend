import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Get('delete/:id')
  remove(@Param('id') id: string){
    return this.contactService.remove(+id);
  }

  @Get('getcontact/:id')
  edit(@Param('id') id: number){
    return this.contactService.getid(id);
  }

  @Put('update/:id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: Partial<Contact>,
  ): Promise<Contact> {
    return this.contactService.update(id, updateUserDto);
  }

  @Put('save')
  save(
    @Body() updateUserDto: Partial<Contact>,
  ): Promise<Contact> {
    return this.contactService.save(updateUserDto);
  }
}
