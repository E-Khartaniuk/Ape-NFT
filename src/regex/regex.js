export const isValidUsername = username => {
  const usernameRegex = /^@[a-zA-Z0-9_]{1,15}$/;
  return usernameRegex.test(username);
};

export const isValidWallet = wallet => {
  const walletRegex = /^[a-zA-Z0-9]{1,20}$/;
  return walletRegex.test(wallet);
};
