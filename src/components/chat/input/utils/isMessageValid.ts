export const isMessageValid = (message: string): boolean => {
  return message.length > 0 && message.length < 201;
};
