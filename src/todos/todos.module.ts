import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Todos, TodosModel } from './schemas/todos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todos.name, schema: TodosModel }])
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
