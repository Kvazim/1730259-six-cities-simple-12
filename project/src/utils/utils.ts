export const changeInPercent = (item: number) => `${String(Math.round(item) / 0.05)}%`;
export const capitalize = (item: string): string => item.charAt(0).toUpperCase() + item.substring(1);
