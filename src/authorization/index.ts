const adminList = [1, 2, 4];

export const isUserAdmin = (userId: number) => {
  return adminList.includes(userId);
};
