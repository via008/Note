# 对合约地址和钱包地址理解混乱

传参问题导致报错：

```
The contract function "symbol" returned no data ("0x"). This could be due to any of the following: - The contract does not have the function "symbol", - The parameters passed to the contract function may be invalid, or - The address is not a contract. Contract Call: address: 0x6B175474E89094C44Da98b954EedeAC495271d0F function: symbol() Docs: https://viem.sh/docs/contract/readContract Version: viem@2.55.19
```

# 疑问

- 以太坊测试网上的 ERC-20 的合约地址在哪里找？