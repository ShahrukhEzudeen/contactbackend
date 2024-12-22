import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { Contact } from './entities/contact.entity';
import { ContactService } from './contact.service';

@Controller('')
export class UsersController {
  constructor(private readonly ContactService: ContactService) {}


}