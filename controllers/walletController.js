import { generateEthereumWallets } from "../services/walletService.js";

export const createWallets = (req, res) => {
  const { count } = req.body;

  if (!count || count <= 0) {
    return res.status(400).json({ error: "A positive count is required" });
  }

  try {
    const result = generateEthereumWallets(count);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Error generating wallets" });
  }
};
