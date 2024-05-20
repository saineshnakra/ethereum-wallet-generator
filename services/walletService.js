import bip39 from "bip39";
import HDKey from "hdkey";
import Wallet from "ethereumjs-wallet";

export const generateEthereumWallets = (count) => {
  try {
    console.log("Reached function" + `${count}`);

    const mnemonic = bip39.generateMnemonic();
    console.log("Generated mnemonic:", mnemonic);

    const wallets = [];
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    console.log("Generated seed:", seed.toString("hex")); // Convert seed to hex for readability

    const hdWallet = HDKey.fromMasterSeed(seed);
    console.log("HD Wallet:", hdWallet);

    const path = "m/44'/60'/0'/0/";

    for (let i = 0; i < count; i++) {
      const wallet = Wallet["default"].fromPrivateKey(
        hdWallet.derive(path + i).privateKey
      );
      console.log(`Wallet ${i}:`, wallet);

      wallets.push({
        address: wallet.getAddressString(),
        privateKey: wallet.getPrivateKeyString(),
      });
    }

    return { mnemonic, wallets };
  } catch (error) {
    console.error("Error generating wallets:", error);
    throw new Error("Error generating wallets");
  }
};
