
// import { SchemaTypes } from 'mongoose';
import BaseSchema from './BaseSchema';

const messageSchema = new BaseSchema({
  task_id: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  contact_list: {
    type: String,
    required: true,
  },
});
export default messageSchema;
