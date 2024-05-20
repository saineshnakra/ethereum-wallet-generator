import bip39 from "bip39";
import HDKey from "ethereumjs-wallet/dist/hdkey.js";

export const generateEthereumWallets = (count) => {
  const mnemonic = bip39.generateMnemonic();
  const wallets = [];
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const hdWallet = HDKey.fromMasterSeed(seed);
  const path = "m/44'/60'/0'/0/";

  for (let i = 0; i < count; i++) {
    const wallet = hdWallet.derivePath(path + i).getWallet();
    wallets.push({
      address: wallet.getAddressString(),
      privateKey: wallet.getPrivateKeyString(),
    });
  }

  console.log(wallets);

  return { mnemonic, wallets };
};
