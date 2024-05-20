import { generateEthereumWallets } from "../services/walletService.js";

describe("Wallet Service", () => {
  test("should generate the specified number of Ethereum wallets", () => {
    const count = 5;
    const result = generateEthereumWallets(count);

    expect(result).toHaveProperty("mnemonic");
    expect(result.wallets.length).toBe(count);
    result.wallets.forEach((wallet) => {
      expect(wallet).toHaveProperty("address");
      expect(wallet).toHaveProperty("privateKey");
    });
  });
});
