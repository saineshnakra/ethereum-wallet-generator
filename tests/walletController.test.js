import request from "supertest";
import express from "express";
import walletRoutes from "../routes/walletRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/wallet", walletRoutes);

describe("Wallet Controller", () => {
  test("POST /api/wallet/create should generate the specified number of Ethereum wallets", async () => {
    const response = await request(app)
      .post("http://localhost:3000/api/wallet/create")
      .send({ count: 5 });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("mnemonic");
    expect(response.body.wallets.length).toBe(5);
    response.body.wallets.forEach((wallet) => {
      expect(wallet).toHaveProperty("address");
      expect(wallet).toHaveProperty("privateKey");
    });
  });

  test("POST /api/wallet/create should return error if count is missing or invalid", async () => {
    let response = await request(app).post("/api/wallet/create").send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("A positive count is required");

    response = await request(app)
      .post("/api/wallet/create")
      .send({ count: -1 });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("A positive count is required");
  });
});
