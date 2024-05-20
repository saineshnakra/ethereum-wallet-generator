# Ethereum Wallet Generator API

A Node.js API service for generating Ethereum wallet information using Express.js.

## Features

- Generates a specified number of Ethereum addresses and private keys.
- Internally generates a mnemonic phrase for wallet generation.
- Built with Express.js for a robust API structure.
- Secure and optimized using industry-standard libraries.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ethereum-wallet-generator.git
    cd ethereum-wallet-generator
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file with the following content:
    ```plaintext
    PORT=3000
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

Use Postman or any API client to test the endpoint:

- **URL**: `http://localhost:3000/api/wallet/create`
- **Method**: POST
- **Body**:
    ```json
    {
        "count": 5
    }
    ```

## Example Response

```json
{
    "mnemonic": "example seed phrase used for testing only please do not use this",
    "wallets": [
        {
            "address": "0x...",
            "privateKey": "0x..."
        },
        {
            "address": "0x...",
            "privateKey": "0x..."
        }
        // ... more wallets
    ]
}
```
