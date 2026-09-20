# 余额不足

钱包账户提示：您的账户中没有足够的 SepoliaETH 来支付网络费用。无法点击确认

# 用户拒绝交易

```
TransactionExecutionError: User rejected the request.

Request Arguments:
  chain:  Sepolia (id: 11155111)
  from:   0x6C075De21F2E6A5aD753aD3f410932D86e203555
  to:     0x6C075De21F2E6A5aD753aD3f410932D86e203555
  value:  0.01 ETH

Details: MetaMask Tx Signature: User denied transaction signature.
Version: viem@2.55.19
    at getTransactionError (getTransactionError.ts:44:10)
    at sendTransaction (sendTransaction.ts:397:30)
    at async sendTransaction (sendTransaction.ts:86:16)Caused by: UserRejectedRequestError: User rejected the request.

Details: MetaMask Tx Signature: User denied transaction signature.
Version: viem@2.55.19
```

# gas 不足

```
TransactionExecutionError: The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.

This error could arise when the account does not have enough funds to:
 - pay for the total gas fee,
 - pay for the value to send.
 
The cost of the transaction is calculated as `gas * gas fee + value`, where:
 - `gas` is the amount of gas needed for transaction to execute,
 - `gas fee` is the gas fee,
 - `value` is the amount of ether to send to the recipient.
 
Request Arguments:
  chain:  Sepolia (id: 11155111)
  from:   0x6C075De21F2E6A5aD753aD3f410932D86e203555
  to:     0x6C075De21F2E6A5aD753aD3f410932D86e203555
  value:  0.049 ETH
  gas:    2100000

Details: RPC 0xaa36a7 Infura eth_sendRawTransaction: insufficient funds for gas * price + value: balance 49460538964019000, tx cost 55221353187700000, overshot 5760814223681000
Version: viem@2.55.19
    at getTransactionError (getTransactionError.ts:44:10)
    at sendTransaction (sendTransaction.ts:397:30)
    at async sendTransaction (sendTransaction.ts:86:16)Caused by: InsufficientFundsError: The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.

This error could arise when the account does not have enough funds to:
 - pay for the total gas fee,
 - pay for the value to send.
 
The cost of the transaction is calculated as `gas * gas fee + value`, where:
 - `gas` is the amount of gas needed for transaction to execute,
 - `gas fee` is the gas fee,
 - `value` is the amount of ether to send to the recipient.

Details: RPC 0xaa36a7 Infura eth_sendRawTransaction: insufficient funds for gas * price + value: balance 49460538964019000, tx cost 55221353187700000, overshot 5760814223681000
Version: viem@2.55.19
    at getNodeError (getNodeError.ts:103:12)
    at getTransactionError.ts:37:31
    at getTransactionError (getTransactionError.ts:43:5)
    at sendTransaction (sendTransaction.ts:397:30)
    at async sendTransaction (sendTransaction.ts:86:16)Caused by: InternalRpcError: An internal error was received.

Details: RPC 0xaa36a7 Infura eth_sendRawTransaction: insufficient funds for gas * price + value: balance 49460538964019000, tx cost 55221353187700000, overshot 5760814223681000
Version: viem@2.55.19
    at buildRequest.ts:186:25
    at async attemptRetry (withRetry.ts:63:22)
```