## 基本概念

- 去中心化
- 区块链
  - 区块=账本页
  - 链=时间锁
  - 篡改一个块=需要重算后面所有块的数学题
- gas
- 账户
- 智能合约
- 工作量证明 proof of work

### 账户

| 账户类型      | 有无代码 | 有无私钥 | 谁来触发   |
| --------- | ---- | ---- | ------ |
| EOA（外部账户） | 无    | 有    | 用户     |
| 合约账户      | 有    | 无    | 合约代码触发 |

### 交易

- from 发送方
- to 接收方
- value 交易金额
- gas price 交易价
- gas used 交易消耗的gas量

> from: 0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97
>
> to: 0xFEEEEEE44046c3f61a8CC081E0918eF0de0a7ffC
>
> value: 0.006649053740119662 ETH($12.51)
>
> gas price: 0.087769375 Gwei (0.000000000087769375 ETH)
>
> gas used: ?
>
> <br />
>
> gas: 0.00000254724280125/0.000000000087769375 = 29,022
> 

<br />

<br />

## W1 总结

Block：区块，区块头和区块体；区块头包含当前区块的 hash 值、上一个区块的 hash 值、nonce等，区块体包含交易数据。

Hash：唯一标识的一个随机字符串。

Gas：交易费。

EOA：外部账户，用户直接操作的账户。

Transaction：交易。

## W2

### ETH 单位总结

1 ETH = 10^9 Gwei = 10^18 Wei

- Gwei：通常用作 gas 费
- Wei：以太币最小面额，程序中用

## W3

一次交易：用户点击 -> 钱包弹窗 -> 用户签名 -> 交易上链（pending） -> 区块确认（success）

### `useSendTransaction` & `useWaitForTransactionReceipt` 配合

- `useConnection` 判断钱包时候已经连接，连接钱包
- `useSendTransaction` 确认交易，获取交易 hash
- `useWaitForTransactionReceipt` 广播交易，等待区块打包，返回交易区块数据

### 一笔交易从点击到上链，经历的状态

[交易全链路](./交易全链路.drawio)

### nonce 太高或太低有什么问题？

根据账户按序递增，一般不需要自己管理，钱包会自动递增。

- 太高：需要等待前序nonce交易确认
- 太低：拒绝交易

### 总结

```
                       React
                         │
                         ↓
                       wagmi
                         │
                         ↓
                       viem
                    ↙         ↘
                   ↓           ↓
            Public Client   Wallet Client
                   │           │
                   ↓           ↓
                  RPC       Wallet Provider
                   │           │
                   ↓           ↓
            Ethereum Node    MetaMask
                   │           │
                   └─────┬─────┘
                         ↓
                    Ethereum
```

