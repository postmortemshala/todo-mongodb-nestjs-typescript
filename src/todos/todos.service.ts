import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todos } from './schemas/todos.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {

  constructor(
    @InjectModel(Todos.name) private model: Model<Todos>) {

  }

  async create(createTodoDto: CreateTodoDto) {
    return await this.model.create({
      name: createTodoDto.name,
      age: createTodoDto.age

    })
  }

  async findAll() {
    return await this.model.find()
  }

  async findOne(id: string) {
    return await this.model.findById(id)
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
