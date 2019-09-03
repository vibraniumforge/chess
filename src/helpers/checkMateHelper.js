const checkMateHelper = (kingResults, allAttacks) => {
  let kingIsCheckMated = false;
  let filter = kingResults.filter(kr => {
    return allAttacks.includes(kr);
  });
  if (filter.length === kingResults.length) {
    kingIsCheckMated = true;
  }
  return kingIsCheckMated;
};

export { checkMateHelper };
