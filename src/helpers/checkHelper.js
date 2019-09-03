const checkHelper = (kingResults, allAttacks) => {
  let kingIsChecked = false;
  for (let i = 0; i < allAttacks.length; i++) {
    if (kingResults === allAttacks[i]) {
      kingIsChecked = true;
    }
  }
  return kingIsChecked;
};

export { checkHelper };
