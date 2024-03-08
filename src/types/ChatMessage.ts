import { UserInterface } from '@/types/User';

export interface IChatMessage {
  id: number;
  text: string;
  createdAt: Date;
  photos: { filename: string }[];
  from: UserInterface;
}

export interface IReceivedMessage extends IChatMessage {
  from: UserInterface;
}

export type Connection = {
  to: UserInterface;
  from: UserInterface;
  id: number;
  messages: IChatMessage[];
};
