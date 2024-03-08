import { Connection } from '@/types/ChatMessage';

export interface UserInterface {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone?: string;
  connections: Connection[];
  receivedConnections: Connection[];
}
