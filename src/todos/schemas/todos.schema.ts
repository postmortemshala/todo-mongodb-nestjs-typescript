import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({ timestamps: true })
export class Todos {

    @Prop({ type: String, default: "" })
    name: string

    @Prop({ type: Number, default: "" })
    age: number

}

export type TodosDocument = HydratedDocument<Todos>
export const TodosModel = SchemaFactory.createForClass(Todos)