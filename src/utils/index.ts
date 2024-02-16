export const formatDate = (dateString: string) => {
  const options = { day: "numeric", month: "short" } as const;
  return new Date(dateString).toLocaleDateString(undefined, options);
};
