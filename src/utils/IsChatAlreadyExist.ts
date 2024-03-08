import { Connection } from '@/types/ChatMessage';

export const IsChatAlreadyExist = (
  connection: Connection,
  firstUserId: number,
  secondUserId: number,
) => {
  return (
    (connection.from.id === firstUserId && connection.to.id === secondUserId) ||
    (connection.from.id === secondUserId && connection.to.id === firstUserId)
  );
};
