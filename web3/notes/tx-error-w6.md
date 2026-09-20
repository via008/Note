# Wallet Client 没有连接到浏览器钱包

报错：AccountNotFoundError:Could not find an Account to execute with this Action.

解决：
```
export const walletClient = createWalletClient({
  chain: sepolia,
  transport: custom(window.ethereum),
})

// requestAddresses() 会主动请求钱包授权
const [account] = await walletClient.requestAddresses()
```

# 单位问题

报错：The number 0.1 cannot be converted to a BigInt because it is not an integer

解决：parseEther('0.1')，转成wei单位

# 地址错误

原始报错： InvalidAddressError: Address "abc" is invalid.
- Address must be a hex value of 20 bytes (40 hex characters).
- Address must match its checksum counterpart.

发生阶段：构造阶段

# 用户拒绝

报错：error ContractFunctionExecutionError: User rejected the request.
发生阶段：签名阶段


# nonce 错误

原始报错：ContractFunctionExecutionError: The contract function "transfer" reverted with the following reason:
RPC 0xaa36a7 Infura eth_sendRawTransaction: nonce too low: next nonce 47, tx nonce 0

发生阶段：发送阶段