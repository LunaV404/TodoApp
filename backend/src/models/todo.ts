import { InferSchemaType, Schema, model } from "mongoose";

const todoSchema = new Schema ({
    text: {type: String, required: true},
    completed: {type: Boolean},
}, {timestamps: true});

type Todo = InferSchemaType<typeof todoSchema>;

export default model<Todo>("Todo", todoSchema)