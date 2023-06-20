export const formatDate = (dateISO: string): string => {
  const date = new Date(dateISO);

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
};
