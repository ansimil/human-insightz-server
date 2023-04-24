import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

const newLocal = 'User already exists';
@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  surname: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ default: false })
  subscribed: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
