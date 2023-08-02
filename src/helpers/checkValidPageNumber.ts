export const checkValidPageNumber = (page: string | undefined): boolean => {
  const pageNumber = Number(page);

  return !Number.isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= 10;
};
