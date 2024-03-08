export const GetMessageTime = (timestamp: string) => {
  const date = new Date(timestamp);

  const minutes = date.getHours();
  const seconds = date.getMinutes();

  const formattedTime = `${minutes}:${seconds}`;

  return formattedTime;
};
