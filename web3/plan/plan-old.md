# 前端转 Web3 · 半年学习计划 v2

> **周期**：2026-08-10 ～ 2027-02-07
>
> **周期**：26 周
>
> **时间预算**：约 8h / 周，约 208h
>
> **学习方式**：工作日轻量输入 + 周末集中编码
>
> **核心目标**：从“会调用 Web3 API”升级到“理解 Ethereum + 能独立开发 DApp + 能解释和 Debug”

***

# 一、半年总目标

半年后不追求成为 Solidity / 区块链底层专家，而是定位为：

> **能够独立开发、调试、部署 DApp 的 Web3 Frontend Developer。**

最终具备以下能力：

```text
Ethereum 基础
      ↓
理解 Block / Account / Transaction / Contract
      ↓
理解 Gas / Nonce / Receipt / Event / Log
      ↓
理解 RPC / Wallet / Provider
      ↓
熟练 viem + wagmi
      ↓
ERC20 / ERC721
      ↓
读链 + 写链 + 监听事件
      ↓
链上历史数据 / Indexing
      ↓
NFT DApp
      ↓
DeFi / Swap DApp
      ↓
Wallet / Transaction Dashboard
      ↓
Web3 安全
      ↓
测试 + 部署
      ↓
作品集 + 面试
```

***

# 二、半年最终验收标准

使用下面 5 个等级：

| 等级 | 标准           |
| -- | ------------ |
| L1 | 能解释概念        |
| L2 | 能按照官方文档写出来   |
| L3 | 不看教程能独立写出来   |
| L4 | 出问题能自己 Debug |
| L5 | 能解释底层原理和设计原因 |

半年结束至少要求核心知识达到：

> **L3～L5**

例如：

### 不是：

> `useWaitForTransactionReceipt` 是等待交易的 Hook。

而是：

> 用户提交交易后首先获得 transaction hash，hash 只代表交易已经提交/广播，并不代表执行成功。前端需要继续等待 receipt，通过 receipt 判断交易最终执行结果，因此 UI 可以区分提交、pending、success、reverted 等状态。

***

# 三、推荐时间安排

## 工作日

每周选择 **3 天**：

```text
45 min / 天
```

内容：

```text
20 min 官方文档 / 教程
15 min 看源码 / Etherscan / 真实交易
10 min 实验或笔记
```

不要求每天写完整功能。

***

## 周末

### 周六

```text
09:00 - 12:00
3h
```

集中写代码。

### 周日

```text
09:00 - 11:30
2.5h
```

继续项目。

```text
11:30 - 12:00
0.5h
```

复盘。

***

## 每周

```text
工作日：2.25h
周六：3h
周日：2.75h

≈ 8h
```

26 周：

```text
≈ 208h
```

***

# 四、26 周总体路线

| 阶段   |      周数 | 核心目标                   | 最终产出             |
| ---- | ------: | ---------------------- | ---------------- |
| 阶段 1 |   W1-W4 | Ethereum + Transaction | 完整读写链 Demo       |
| 阶段 2 |   W5-W8 | Web3 Frontend Core     | ERC20 DApp       |
| 阶段 3 |  W9-W12 | 链上数据                   | Wallet Dashboard |
| 阶段 4 | W13-W16 | NFT                    | NFT Mint DApp    |
| 阶段 5 | W17-W20 | DeFi                   | Swap DApp        |
| 阶段 6 | W21-W22 | 项目收尾                   | 第三个小型项目          |
| 阶段 7 | W23-W26 | 安全 + 测试 + 求职           | 完整作品集            |

***

# 阶段 1：Ethereum + Transaction 基础

## W1：Ethereum 心智模型

### 学习

理解：

```text
Blockchain
Block
Ethereum
Account
EOA
Contract Account
Address
Private Key
Public Key
```

重点搞清：

```text
EOA
↓
可以发交易

Contract
↓
不能主动发起交易
```

以及：

```text
用户
 ↓
Wallet
 ↓
Address
 ↓
Ethereum
```

### 实践

开始使用 Sepolia。

在 Etherscan 观察：

```text
Address
Block
Transaction
Contract
```

### 完成标准

不用看资料，可以解释：

> Ethereum 上有哪些主要对象？EOA 和 Contract Account 有什么区别？

***

# W2：Transaction / Gas / Nonce / Receipt

这是非常重要的一周。

理解：

```text
Transaction
Nonce
Gas Limit
Gas Price
Max Fee
Priority Fee
Transaction Hash
Block
Receipt
Confirmation
```

重点建立：

```text
用户点击发送
      ↓
钱包确认
      ↓
签名
      ↓
广播
      ↓
Pending
      ↓
Validator
      ↓
Block
      ↓
Receipt
      ↓
Success / Revert
```

### 实践

实际发送几笔 Sepolia ETH。

去 Etherscan 对照：

```text
from
to
value
nonce
gas
gas price
status
block
transaction hash
```

### 完成标准

能够解释：

> transaction 和 receipt 有什么区别？

> nonce 太高 / 太低有什么问题？

> gas limit 是什么？

***

# W3：RPC + viem + Wallet

建立完整架构：

```text
React
 ↓
wagmi
 ↓
viem
 ↓
RPC
 ↓
Ethereum Node
 ↓
Blockchain
```

学习：

```text
RPC
Public Client
Wallet Client
Provider
Wallet
```

理解：

> 钱包负责什么？

> RPC 负责什么？

> viem 负责什么？

> wagmi 又解决什么问题？

### 实践

实现：

```text
Connect Wallet
 ↓
显示 address
 ↓
显示 chainId
 ↓
显示 ETH balance
```

***

# W4：ERC-20 + 完整交易闭环

学习：

```text
ERC-20
ABI
balanceOf
decimals
symbol
name
totalSupply
transfer
```

### 实践

完成：

```text
Connect Wallet
      ↓
ETH Balance
      ↓
ERC20 Balance
      ↓
Token Metadata
      ↓
ETH Transfer
      ↓
Transaction Hash
      ↓
Pending
      ↓
Receipt
      ↓
Success / Error
```

### 阶段 1 里程碑

**不看教程，能够独立完成一个简单的 Ethereum 读写页面。**

***

# 阶段 2：Web3 Frontend Core

## W5：ABI + Contract Interaction

理解：

```text
Solidity
 ↓
Compiler
 ↓
ABI
 +
Bytecode
```

ABI 的来源：

```text
自己开发
→ Solidity 编译产物

别人开发
→ 项目 artifacts

已验证合约
→ Etherscan ABI
```

特别搞清：

> **contract address ≠ ABI**

实践：

```text
readContract
```

调用：

```text
decimals
symbol
name
totalSupply
balanceOf
```

***

# W6：Write Contract + Transaction Lifecycle

学习当前 wagmi / viem 的合约写操作。

核心：

```text
writeContract
 ↓
transaction hash
 ↓
waitForTransactionReceipt
 ↓
receipt
```

处理：

```text
idle
loading
pending
success
error
```

### 实践

实现：

```text
ERC20 transfer
```

UI：

```text
发送
 ↓
钱包确认
 ↓
等待提交
 ↓
Pending
 ↓
Success
```

***

# W7：Events / Logs

学习：

```text
Event
Log
Topics
Indexed
```

以：

```text
Transfer
Approval
```

为例。

理解：

```text
Contract State
```

和：

```text
Event Log
```

有什么区别。

### 实践

监听：

```text
Transfer
```

让 UI 自动更新：

```text
余额
交易记录
```

***

# W8：Wallet / Chain / Error Handling

学习：

```text
connect
disconnect
chainId
switch chain
account change
network change
```

重点处理：

```text
钱包未连接
错误网络
余额不足
用户拒绝
交易 revert
RPC 错误
交易 pending
```

### 阶段 2 里程碑

完成：

> **ERC20 Mini DApp**

包含：

```text
钱包连接
ETH balance
ERC20 balance
Token metadata
ERC20 transfer
交易状态
Transfer Event
错误处理
```

***

# 阶段 3：链上数据

这一阶段非常重要。

因为你需要理解：

> **“读一个状态”很简单，“查询历史数据”是另一回事。**

***

# W9：Block / Transaction / Receipt 查询

学习：

```text
getBlockNumber
getBlock
getTransaction
getTransactionReceipt
```

实现：

```text
Latest Block
 ↓
Block Detail
 ↓
Transaction Detail
 ↓
Receipt
```

***

# W10：Event Logs

学习：

```text
eth_getLogs
```

理解：

```text
Contract
 ↓
Event
 ↓
Log
 ↓
Topics
 ↓
Filter
```

实践：

查询某个 ERC20：

```text
Transfer logs
```

***

# W11：Indexing / The Graph

先理解为什么：

```text
RPC
```

不适合直接承担：

> “查询一个地址过去一年所有 Token Transfer。”

然后理解：

```text
Blockchain
 ↓
Events
 ↓
Indexer
 ↓
Database
 ↓
GraphQL
```

学习 The Graph。

重点不是背 API，而是理解：

> **Indexer 解决什么问题？**

***

# W12：Wallet Dashboard

把前面的内容整合。

页面：

```text
┌────────────────────────────┐
│ Wallet                     │
│ 0x1234...5678              │
├────────────────────────────┤
│ ETH Balance                │
│ ERC20 Balance              │
├────────────────────────────┤
│ Recent Transactions        │
│ TxHash                     │
│ Amount                     │
│ Status                     │
├────────────────────────────┤
│ Token Transfers            │
│ From / To / Amount         │
└────────────────────────────┘
```

### 阶段 3里程碑

完成：

> **Wallet / Transaction Dashboard**

并部署到测试网。

***

# 阶段 4：NFT DApp

## W13：ERC-721

学习：

```text
ERC721
tokenId
ownerOf
tokenURI
balanceOf
safeTransferFrom
```

了解：

```text
NFT
≠ 图片
```

而是：

```text
NFT Contract
 ↓
tokenId
 ↓
tokenURI
 ↓
metadata
 ↓
image
```

***

# W14：IPFS + Metadata

理解：

```text
Image
 ↓
IPFS
 ↓
CID

Metadata JSON
 ↓
IPFS
 ↓
CID

NFT
 ↓
tokenURI
 ↓
Metadata CID
```

实践：

上传：

```text
image
metadata.json
```

***

# W15：Mint

实现：

```text
Connect Wallet
 ↓
Upload Image
 ↓
Generate Metadata
 ↓
IPFS
 ↓
Mint
 ↓
Transaction
 ↓
Receipt
```

***

# W16：NFT Gallery

展示：

```text
NFT
├── image
├── name
├── description
└── tokenId
```

处理：

```text
loading
error
empty
pending
success
```

### 阶段 4里程碑

完成：

> **NFT Mint DApp**

这是第一个正式作品集项目。

***

# 阶段 5：DeFi / Swap

这是三个项目里技术含量最高的一块。

***

# W17：ERC20 Approval

理解：

```text
User
 ↓
approve
 ↓
DEX Contract
```

核心：

```text
allowance
```

理解为什么：

> DEX 不能直接拿用户 Token。

实践：

```text
Approve
 ↓
Allowance
 ↓
Approved
```

***

# W18：Swap

理解：

```text
Token A
 ↓
DEX
 ↓
Token B
```

实践：

```text
输入 Token
输出 Token
Amount
```

如果真实测试网 DEX 环境不好，就先用自己的简化 Swap 合约模拟，不要为了找测试网流动性浪费大量时间。

***

# W19：Slippage + Quote

学习：

```text
Slippage
Price Impact
Minimum Received
Deadline
```

前端展示：

```text
You Pay
You Receive
Minimum Received
Slippage
```

***

# W20：完整 Swap

最终流程：

```text
Connect
 ↓
Select Token
 ↓
Enter Amount
 ↓
Quote
 ↓
Approve
 ↓
Wait
 ↓
Swap
 ↓
Wait
 ↓
Success
 ↓
Refresh Balance
```

### 阶段 5里程碑

完成：

> **Token Swap DApp**

这是第二个正式作品集项目。

***

# 阶段 6：第三个小项目

这里不再强求做一个完整 Voting DApp。

因为：

> 3 个大型项目不如 2 个真正做扎实的项目。

***

# W21：Transaction Dashboard

做一个更偏工程化的小项目：

```text
Wallet
 ↓
Transactions
 ↓
Transaction Detail
```

显示：

```text
TxHash
From
To
Value
Gas
Block
Status
Timestamp
```

支持：

```text
Etherscan
```

跳转。

***

# W22：项目工程化

给三个项目统一补：

```text
Loading
Error
Empty
Pending
Success
Wrong Network
Wallet Disconnect
User Reject
Transaction Revert
```

同时完善：

```text
TypeScript
组件拆分
状态管理
README
环境变量
部署
```

### 阶段 6里程碑

最终拥有：

```text
Project 1
NFT Mint

Project 2
Token Swap

Project 3
Wallet Dashboard
```

其中：

> **NFT + Swap 是主作品。**

Dashboard 是辅助作品。

***

# 阶段 7：Web3 安全

# W23：Web3 Frontend Security

重点学习：

### 钱包

```text
ChainId 校验
Contract Address 校验
RPC
```

### ERC20

```text
approve
allowance
无限授权
```

### Signature

```text
personal_sign
EIP-712
Typed Data
```

### Transaction

理解：

```text
to
value
data
gas
nonce
```

### 用户行为

区分：

```text
User Reject
```

和：

```text
Transaction Revert
```

以及：

```text
RPC Error
```

***

# W24：部署

三个项目：

```text
Frontend
 ↓
Vercel

Contract
 ↓
Sepolia

Metadata
 ↓
IPFS

Chain Data
 ↓
RPC / Indexer
```

每个项目做到：

```text
线上 URL
GitHub
Contract Address
Etherscan
README
```

ENS 不再作为必须项。

***

# W25：测试 + 作品集

这是原计划缺失比较明显的一块。

至少覆盖：

```text
Wallet not connected
Wrong network
User reject
Insufficient balance
Transaction revert
Pending
Success
```

测试：

```text
Unit
Integration
E2E
```

然后建立：

```text
Portfolio
```

展示：

```text
NFT Mint
Token Swap
Wallet Dashboard
```

每个项目写清楚：

```text
项目背景
技术栈
架构
核心难点
交易流程
安全处理
踩坑
Demo
GitHub
Contract
```

***

# W26：Web3 Frontend 面试

不要单纯背面试题。

进行：

> **模拟面试 + 项目讲解**

至少能回答：

### Ethereum

```text
Ethereum 是什么？

EOA 和 Contract Account 区别？

Block 是什么？

Transaction 是什么？
```

### Transaction

```text
nonce 是什么？

gas limit 是什么？

gas price / max fee / priority fee 区别？

transaction 和 receipt 区别？

transaction hash 是什么？

revert 是什么？
```

### Frontend

```text
wagmi 和 viem 什么关系？

Public Client 是什么？

Wallet Client 是什么？

RPC 是什么？

MetaMask 在整个流程中做什么？
```

### Contract

```text
ABI 是什么？

ABI 从哪里来？

ERC20 是什么？

approve 为什么需要？

allowance 是什么？

Event / Log 是什么？
```

### Data

```text
为什么 RPC 不适合查询所有历史交易？

Indexer 是什么？

The Graph 解决什么问题？
```

### Security

```text
无限 approve 有什么风险？

EIP-712 是什么？

为什么要校验 chainId？

为什么要校验 contract address？
```

***

# 五、三个最终项目的定位

我建议你最终不要把三个项目平等对待。

## 🥇 主项目：Token Swap

因为最能体现：

```text
ERC20
+
approve
+
allowance
+
Contract
+
Transaction
+
Slippage
+
Error
+
State Management
```

这是最值得面试时重点讲的项目。

***

## 🥈 主项目：NFT Mint

体现：

```text
ERC721
+
IPFS
+
Metadata
+
Contract
+
Transaction
+
Event
```

适合证明你理解 NFT 整套链路。

***

## 🥉 辅助项目：Wallet Dashboard

体现：

```text
RPC
+
Block
+
Transaction
+
Receipt
+
Event
+
Indexing
+
Data UI
```

适合证明你不是只会做交易按钮。

***

# 六、整个半年最重要的技术栈

不要无限扩展。

核心锁定：

```text
React
TypeScript
Next.js

        ↓

wagmi
viem

        ↓

MetaMask / Wallet

        ↓

Ethereum / Sepolia

        ↓

Solidity
OpenZeppelin

        ↓

ERC20
ERC721

        ↓

IPFS

        ↓

The Graph / Indexing

        ↓

Vercel
```

暂时不需要把：

```text
ethers.js
Hardhat
Foundry
Solana
Rust
Cosmos
Polkadot
```

全部塞进半年计划。

尤其是：

> **不要因为 Web3 很大，就不停扩大技术栈。**

你现在的目标是：

> **Ethereum Frontend**

而不是：

> Blockchain 全栈工程师。

***

# 七、半年知识结构最终应该长这样

```text
                    Web3 Frontend
                          │
             ┌────────────┴────────────┐
             ↓                         ↓
          Ethereum                  Frontend
             │                         │
      ┌──────┼──────┐             React / Next
      ↓      ↓      ↓
    Block   Tx    Contract
             │      │
       ┌─────┼──┐   ├── ABI
       ↓     ↓  ↓   ├── ERC20
     Gas   Nonce    └── ERC721
       │     │
       └──┬──┘
          ↓
       Receipt
          │
          ↓
        Events
          │
          ↓
       Logs / Index
          │
          ↓
      Historical Data


Frontend
   │
   ├── wagmi
   ├── viem
   ├── Wallet
   ├── RPC
   └── State
          │
          ↓
       DApp
          │
    ┌─────┼─────┐
    ↓     ↓     ↓
   NFT   Swap  Dashboard
    │     │
    ↓     ↓
  IPFS  ERC20
          │
          ↓
       approve
          │
          ↓
       allowance


          ↓
       Security
          ↓
       Testing
          ↓
       Deploy
          ↓
      Portfolio
          ↓
       Interview
```

***

# 八、每周复盘模板也建议升级

你原来的复盘模板可以继续用，但增加 3 个非常关键的问题：

```markdown
# 第 X 周复盘

## 1. 本周完成情况

| 任务 | 是否完成 | 实际用时 |
|---|---|---|
| | | |

## 2. 知识掌握

| 知识点 | 能解释 | 能独立写 | 能 Debug |
|---|---|---|---|
| Transaction | [ ] | [ ] | [ ] |
| Receipt | [ ] | [ ] | [ ] |
| ABI | [ ] | [ ] | [ ] |

## 3. 本周最重要的一个概念

我现在能用自己的话解释：

> 

## 4. 本周最重要的一个坑

问题：

> 

原因：

> 

解决：

> 

## 5. 我有没有脱离教程？

- [ ] 全程跟教程
- [ ] 看文档完成
- [ ] 大部分独立完成
- [ ] 完全独立完成

## 6. 如果明天重新做一次，我能不能独立完成？

- [ ] 不能
- [ ] 部分可以
- [ ] 可以

## 7. 本周代码产出

- [ ] Git commit
- [ ] Demo
- [ ] README
- [ ] Blog / Note

## 8. 下周计划

最重要的一件事：

> 
```

***

# 九、最终版本的核心原则

整个半年你只需要牢牢记住 **5 条规则**。

### ① 不要追求“学完 Web3”

你的目标不是：

> 学完区块链。

而是：

> **成为一个懂 Ethereum 的前端工程师。**

***

### ② 每个概念必须落到真实交易

例如：

```text
Nonce
↓
看真实交易

Gas
↓
看真实交易

Receipt
↓
看真实交易

Event
↓
看真实交易

ABI
↓
看真实合约
```

**Etherscan 是你的实验室。**

***

### ③ 不要把 wagmi 当成 Web3

你真正要掌握的是：

```text
Ethereum 原理
        ↓
RPC
        ↓
viem
        ↓
wagmi
```

而不是：

```text
背 wagmi API
```

***

### ④ 两个真正优秀的项目 > 三个半成品

最终：

```text
NFT Mint
⭐⭐⭐⭐

Token Swap
⭐⭐⭐⭐⭐

Wallet Dashboard
⭐⭐⭐
```

比：

```text
NFT
⭐⭐

Swap
⭐⭐

Voting
⭐⭐
```

更适合求职。

***

### ⑤ 最终目标不是“会做”，而是“会解释为什么”

这是你从：

> **普通前端 → Web3 前端**

最关键的一次能力升级。

比如面试官问：

> “为什么交易发送后还需要 `waitForTransactionReceipt`？”

你不能回答：

> “因为 wagmi 就是这么用的。”

而应该能够从：

```text
transaction hash
↓
mempool / pending
↓
block inclusion
↓
EVM execution
↓
receipt
↓
status
```

完整解释。

**做到这一点，我认为这套半年计划才真正完成。**

***

