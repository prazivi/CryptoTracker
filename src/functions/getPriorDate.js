const today = new Date();

export const getPriorDate = (days) => {
  return new Date(new Date().setDate(today.getDate() - days));
};
