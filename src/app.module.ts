import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://connect:development@the-cool-expert.1rxjla1.mongodb.net/?retryWrites=true&w=majority", {
      dbName: "2922024"
    }),
    TodosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
