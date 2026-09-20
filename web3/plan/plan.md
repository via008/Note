# 前端 → Web3 Application / Agent Engineer · 半年学习计划 v3

> **周期**：2026-08-10 ～ 2027-02-07
> **总周期**：26 周
> **时间预算**：约 8h / 周，约 208h
> **当前进度**：W1～W5 已完成
> **目标岗位**：Web3 Application Engineer / Web3 Agent Engineer
> **核心技术栈**：React + TypeScript + Next.js + viem + wagmi + Solidity + Foundry + Ethereum + AI Agent

---

# 一、半年最终目标

不再把目标定义成：

> “成为一个会 wagmi 的 Web3 前端工程师。”

而是：

> **成为能够独立设计、实现、Debug 和部署 Web3 Application，并能够将 AI Agent 与钱包、智能合约、链上数据结合起来的工程师。**

最终能力模型：

```text
                         AI Agent
                            │
                            ↓
                    Intent / Planning
                            │
                  ┌─────────┴─────────┐
                  ↓                   ↓
              Read Chain          Execute
                  │                   │
                  ↓                   ↓
             Onchain Data          Wallet
                  │                   │
                  └─────────┬─────────┘
                            ↓
                     Smart Contract
                            ↓
                         EVM
                            ↓
                       Ethereum
```

你最终应该能够回答：

> “用户说一句话，AI 是怎么把它变成一次安全的链上操作的？”

---

# 二、半年能力目标

最终至少达到：

| 能力                  | 目标 |
| ------------------- | -- |
| Ethereum / EVM      | L5 |
| Transaction         | L5 |
| RPC / viem          | L5 |
| wagmi               | L4 |
| Solidity            | L4 |
| Smart Contract      | L4 |
| ERC20               | L5 |
| DeFi                | L4 |
| Wallet              | L5 |
| Signature / EIP-712 | L4 |
| Onchain Data        | L4 |
| Indexing            | L4 |
| AI Agent            | L5 |
| Agent Tool          | L5 |
| Agent + Wallet      | L5 |
| Agent Security      | L4 |
| 系统设计                | L5 |
| AI 辅助开发             | L6 |

---

# 三、重新定义学习等级

原来的 L1～L5 保留，同时增加两个等级。

```text
L1  能解释概念

L2  能按照官方文档写出来

L3  不看教程能独立实现

L4  出问题能自己 Debug

L5  能解释底层原理和设计原因

L6  能独立设计系统

L7  能使用 AI 高效实现，同时判断 AI 的实现是否正确
```

尤其重视：

> **L5 → L6 → L7**

因为 AI 已经极大降低了“写代码”的成本。

以后你的竞争力不是：

> “我比 AI 写代码快。”

而是：

> **“我知道应该让 AI 写什么，而且知道它写得对不对。”**

---

# 四、整个 26 周路线

| 阶段      |      周数 | 核心目标                          | 项目产出               |
| ------- | ------: | ----------------------------- | ------------------ |
| Phase 1 |   W1-W5 | Ethereum + Web3 基础            | ERC20 DApp         |
| Phase 2 |   W6-W9 | Web3 Application Engineering  | Wallet / Portfolio |
| Phase 3 | W10-W13 | DeFi / Smart Contract         | Swap DApp          |
| Phase 4 | W14-W17 | Onchain Data / Indexing       | Onchain Analytics  |
| Phase 5 | W18-W22 | AI Agent × Web3               | Web3 Agent         |
| Phase 6 | W23-W26 | Security + AA + Final Project | AI Web3 Agent      |

---

# Phase 1

# W1：Ethereum 心智模型

### 学习

理解：

```text
Blockchain
Ethereum
Block
Account
EOA
Contract Account
Address
Private Key
Public Key
```

重点：

```text
EOA
 ↓
可以发起 Transaction

Contract Account
 ↓
不能主动发起 Transaction
```

### 实践

使用 Sepolia。

在 Etherscan 观察：

```text
Address
Block
Transaction
Contract
```

### 验收

能够解释：

> Ethereum 上有哪些主要对象？

> EOA 和 Contract Account 有什么区别？

---

# W2：Transaction / Gas / Nonce

学习：

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

建立完整模型：

```text
User
 ↓
Wallet
 ↓
Sign
 ↓
Broadcast
 ↓
Mempool
 ↓
Validator
 ↓
Block
 ↓
EVM Execution
 ↓
Receipt
```

### 实践

实际发送 Sepolia ETH。

观察：

```text
from
to
value
nonce
gas
gas price
status
block
hash
```

### 验收

解释：

> Transaction 和 Receipt 区别？

> Nonce 为什么存在？

> Gas Limit 是什么？

---

# W3：RPC + viem + Wallet

建立：

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

理解：

```text
RPC
Public Client
Wallet Client
Provider
Wallet
```

### 实践

实现：

```text
Connect Wallet
 ↓
Address
 ↓
Chain ID
 ↓
ETH Balance
```

### 验收

解释：

> Wallet 做什么？

> RPC 做什么？

> viem 做什么？

> wagmi 为什么存在？

---

# W4：ERC20

学习：

```text
ERC20
ABI
balanceOf
decimals
symbol
name
totalSupply
transfer
```

理解：

```text
Contract Address
+
ABI
=
Frontend 可以调用 Contract
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

---

# W5：Contract Interaction

你已经完成。

核心：

```text
Solidity
 ↓
Compiler
 ↓
ABI
+
Bytecode
 ↓
Contract
```

理解：

```text
readContract
writeContract
simulate
receipt
event
```

### 阶段验收

能够不看教程完成：

> 一个 Ethereum 读写 DApp。

---

# Phase 2：Web3 Application Engineering

这里开始正式改变学习方式。

---

# W6：Transaction Playground

不再学习一个 API 写一个 Demo。

直接做：

## Transaction Playground

允许用户构造：

```text
to
value
data
gas
nonce
```

然后观察：

```text
Request
 ↓
Signature
 ↓
Hash
 ↓
Pending
 ↓
Block
 ↓
Receipt
 ↓
Event
```

### 故意制造异常

```text
User Reject
Wrong Network
Insufficient Balance
Revert
RPC Error
Invalid Address
```

### 本周重点

**Transaction Debugging。**

---

# W7：Wallet Architecture

学习：

```text
EOA
Smart Account
Wallet
Provider
Signer
Signature
Session Key
```

重点：

```text
personal_sign
eth_signTypedData
EIP-712
```

### 实践：Wallet Lab

```text
Connect
 ↓
Switch Chain
 ↓
Sign Message
 ↓
Sign Typed Data
 ↓
Send Transaction
```

### 验收

能够解释：

> 用户到底签名了什么？

---

# W8：Smart Contract Engineering

开始进入 Solidity，但不追求 Solidity 大而全。

学习：

```text
Solidity
Storage
Memory
Calldata
Mapping
Struct
Modifier
Event
Error
```

写一个：

# Vault Contract

支持：

```text
deposit()
withdraw()
balanceOf()
```

然后：

```text
Solidity
 ↓
Compile
 ↓
Deploy
 ↓
ABI
 ↓
viem
 ↓
React
```

---

# W9：Web3 Application Architecture

开始考虑真正的应用架构。

```text
Frontend
 │
 ├── Wallet
 ├── Contract
 ├── Query
 ├── Transaction
 ├── Cache
 └── Error
       ↓
Backend
       ↓
Indexer
       ↓
Blockchain
```

### 项目

# Wallet / Portfolio App

支持：

```text
Wallet
ETH
ERC20
Transactions
Token Transfers
Contract Interaction
```

### Phase 2 验收

你不只是：

> “会调用 wagmi。”

而是能够设计：

> **一个 Web3 应用从 UI 到 Blockchain 的完整架构。**

---

# Phase 3：DeFi / Smart Contract

NFT 从主线降级为选修。

原因很简单：

> 如果目标是 Web3 Application / Agent，DeFi、Wallet、Contract、Data 的优先级更高。

---

# W10：ERC20 Approval

学习：

```text
approve
allowance
transferFrom
```

理解：

```text
User
 ↓
approve
 ↓
Protocol
 ↓
transferFrom
```

重点：

```text
Infinite Approval
Approval Risk
Allowance
```

---

# W11：DEX / Liquidity

理解：

```text
Token A
 ↓
Pool
 ↓
Token B
```

学习：

```text
Liquidity
Reserve
Price
AMM
Pool
```

不用一开始就深入复杂数学。

先搞懂：

> Token 为什么能够通过 Pool 换成另外一种 Token？

---

# W12：Swap

完整实现：

```text
Select Token
 ↓
Input Amount
 ↓
Quote
 ↓
Approve
 ↓
Swap
 ↓
Receipt
 ↓
Balance Update
```

项目：

# Swap DApp

---

# W13：DeFi Debugging

重点不是继续增加功能。

而是故意让它失败。

制造：

```text
Insufficient Allowance
Insufficient Balance
Slippage Exceeded
Deadline Exceeded
Wrong Network
Transaction Revert
```

然后：

```text
Frontend
 ↓
RPC
 ↓
Transaction
 ↓
Contract
 ↓
Revert
```

反向定位问题。

### Phase 3 验收

你能够解释：

> 一个 Swap 从用户输入金额到 Token 最终到账，中间到底发生了什么？

---

# Phase 4：Onchain Data

这是为 Agent 做准备。

---

# W14：Block / Transaction / Receipt / Logs

学习：

```text
getBlockNumber
getBlock
getTransaction
getTransactionReceipt
getLogs
```

理解：

```text
Contract State
≠
Event Log
```

以及：

```text
Event
 ↓
Log
 ↓
Topics
 ↓
Filter
```

---

# W15：历史数据

理解为什么：

```text
RPC
```

不适合直接完成：

> “查询这个地址过去一年所有 Token Transfer。”

研究：

```text
Blockchain
 ↓
Events
 ↓
Indexer
 ↓
Database
 ↓
API
```

---

# W16：Indexer

学习：

```text
Indexer
Subgraph
GraphQL
```

重点不是背 The Graph API。

而是理解：

> **为什么 Web3 应用需要 Indexer？**

---

# W17：Onchain Analytics

做：

# Onchain Analytics App

例如：

```text
Wallet
 ↓
Assets
 ↓
Token Transfers
 ↓
Transaction History
 ↓
Protocol Interaction
 ↓
Portfolio
```

加入一些分析：

```text
资产变化
交易频率
Token 流入 / 流出
协议交互
```

### Phase 4 验收

能够回答：

> AI Agent 如果要分析一个钱包过去 30 天发生了什么，它应该从哪里获取数据？

---

# Phase 5：AI Agent × Web3

这是新计划的核心。

---

# W18：AI Agent 基础

理解：

```text
LLM
 ↓
Agent
 ↓
Tool
 ↓
State
 ↓
Planning
 ↓
Execution
```

不需要花大量时间研究 AI 模型原理。

重点是：

> **Agent 如何调用外部世界。**

### 实践

做：

# Web3 Chat Agent

用户：

> 我的 ETH 余额是多少？

Agent：

```text
Intent
 ↓
Tool Selection
 ↓
getBalance
 ↓
Ethereum
 ↓
Result
 ↓
LLM
 ↓
Answer
```

---

# W19：Agent Read Chain

建立 Web3 Tools：

```text
getBalance
getTokenBalance
getTransaction
getTransactionReceipt
getTokenTransfers
getContractInfo
getBlock
```

架构：

```text
User
 ↓
LLM
 ↓
Tool Selection
 ↓
Web3 Tool
 ↓
viem
 ↓
RPC
 ↓
Ethereum
```

### 重点

理解：

> Agent 并不是直接“懂区块链”。

它是：

> **通过 Tools 操作区块链。**

---

# W20：Agent Execute Transaction

这是一个非常重要的里程碑。

用户：

> 给 0x123... 转 0.01 ETH。

系统：

```text
User Intent
 ↓
LLM
 ↓
Parameter Extraction
 ↓
Validation
 ↓
Transaction Construction
 ↓
Wallet
 ↓
User Signature
 ↓
Blockchain
 ↓
Receipt
 ↓
Agent
 ↓
Result
```

这里要特别区分：

```text
AI 决策
```

和：

```text
用户授权
```

**AI 不能绕过用户钱包签名。**

---

# W21：Agent + DeFi

把前面的 Swap 接进 Agent。

用户：

> 帮我把 10 USDC 换成 ETH。

Agent：

```text
Intent
 ↓
Get Balance
 ↓
Get Quote
 ↓
Check Allowance
 ↓
Approve
 ↓
Swap
 ↓
Receipt
 ↓
Verify Result
```

这时候你已经不是在做：

> AI Chatbot

而是在做：

> **AI Native Web3 Application。**

---

# W22：Agent Security

这是必须认真学习的一周。

研究：

```text
Prompt Injection
Tool Permission
Transaction Simulation
Spending Limit
Contract Allowlist
Token Allowlist
Human Approval
Session Key
```

建立：

```text
LLM
 ↓
Intent
 ↓
Policy Engine
 ↓
Validation
 ↓
Simulation
 ↓
User Approval
 ↓
Wallet
 ↓
Blockchain
```

例如：

```text
用户：
“把我所有资产都转给 0xxxx”
```

Agent 不应该直接执行。

需要：

```text
Risk Detection
 ↓
Policy
 ↓
Reject / Require Confirmation
```

### Phase 5 验收

你能够设计：

> **一个可以执行链上操作，但不能被 AI 随意支配钱包的 Agent。**

---

# Phase 6：最终项目

W23～W26 不再把时间平均分给：

```text
Security
Testing
Portfolio
Interview
```

而是围绕一个最终项目。

---

# W23：Account Abstraction

学习：

```text
Smart Account
ERC-4337
UserOperation
Bundler
Paymaster
Session Key
```

再了解：

```text
EIP-7702
```

重点理解：

> 为什么未来用户不应该必须理解 EOA + Gas + Approve + 签名这些底层细节。

尝试把 Agent 的交易执行架构升级成：

```text
Agent
 ↓
Smart Account
 ↓
Policy
 ↓
User Approval
 ↓
Bundler / Wallet Infrastructure
 ↓
Blockchain
```

不要求这一周把 AA 所有细节实现出来。

**理解架构比硬啃源码更重要。**

---

# W24：Final Project

正式开发：

# AI Web3 Assistant

核心 UI：

```text
┌─────────────────────────────────────┐
│          AI Web3 Assistant           │
├─────────────────────────────────────┤
│                                     │
│ > 我的钱包里有什么资产？              │
│                                     │
│ > 最近 30 天我做了哪些交易？           │
│                                     │
│ > 为什么我的 ETH 少了？               │
│                                     │
│ > 当前 ETH/USDC 的 Swap Quote？       │
│                                     │
│ > 帮我把 10 USDC 换成 ETH              │
│                                     │
└─────────────────────────────────────┘
```

Tools：

```text
getBalance
getTokenBalance
getTransactions
getTransfers
getQuote
checkAllowance
simulateTransaction
sendTransaction
```

---

# W25：Security + Testing + Production

重点：

## Wallet Security

```text
Chain ID
Contract Address
Wallet State
```

## Transaction Security

```text
Simulation
Gas
Nonce
Value
To
Data
```

## Agent Security

```text
Tool Permission
Spending Limit
Allowlist
User Confirmation
Prompt Injection
```

## 测试

```text
Unit
Integration
E2E
Contract Test
Agent Tool Test
```

尤其测试：

```text
正常交易

用户拒绝

错误网络

余额不足

Contract Revert

Agent 参数错误

恶意 Prompt

超出 Spending Limit

不允许的 Contract
```

---

# W26：发布 + 作品集 + 面试

最终完成：

```text
Frontend
 ↓
Vercel
 ↓
Smart Contract
 ↓
Sepolia
 ↓
Indexer
 ↓
AI Agent
 ↓
Wallet
```

产出：

```text
GitHub
Demo
README
Architecture Diagram
Contract Address
Etherscan
Technical Blog
```

---

# 五、最终项目应该是什么样

最终不是三个割裂的项目。

而是一个主项目 + 两个辅助项目。

---

## 🥇 主项目：AI Web3 Assistant

核心：

```text
AI
+
Wallet
+
Onchain Data
+
Smart Contract
+
DeFi
+
Security
```

这是你最终最重要的作品。

---

## 🥈 辅助项目：Swap DApp

证明：

```text
ERC20
approve
allowance
DEX
Quote
Slippage
Transaction
```

---

## 🥉 辅助项目：Onchain Analytics

证明：

```text
RPC
Event
Log
Indexer
Historical Data
Data Visualization
```

NFT：

> **不再作为必须项目。**

如果后面有时间，再做一个 NFT Mint。

---

# 六、最终技术栈

不要再无限扩展。

锁定：

```text
Frontend
├── React
├── TypeScript
└── Next.js

Web3
├── viem
├── wagmi
└── Ethereum

Smart Contract
├── Solidity
├── Foundry
└── OpenZeppelin

Protocols
├── ERC20
├── ERC721（了解即可）
└── DeFi / DEX

Wallet
├── EOA
├── Smart Account
├── EIP-712
├── ERC-4337
└── EIP-7702

Data
├── RPC
├── Events / Logs
└── Indexer

AI
├── LLM
├── Tool Calling
├── Agent
├── Agent State
└── Agent Security
```

暂时不需要：

```text
Solana
Rust
Cosmos
Polkadot
Substrate
Hardhat
ethers.js
各种 Layer2
```

不是说它们没价值。

而是：

> **你现在最大的风险不是学得少，而是学得太散。**

---

# 七、AI 在这套计划里的正确用法

这一点我建议你从现在开始改变。

以前：

```text
学习
 ↓
自己写
 ↓
Debug
```

现在：

```text
理解需求
 ↓
自己设计
 ↓
让 AI 实现
 ↓
Review
 ↓
Debug
 ↓
深入原理
```

---

## AI 可以直接负责

```text
React 页面
TypeScript
wagmi boilerplate
Solidity boilerplate
测试代码
类型定义
UI
CRUD
常规 Debug
```

不要浪费大量学习时间在这些事情上。

---

## 你必须自己掌握

```text
为什么这样设计？

Transaction 到底发生了什么？

这个 ABI 是怎么来的？

这个 transaction 为什么 revert？

这个数据从哪里来的？

这个 Agent 为什么调用这个 Tool？

这个 Tool 有没有权限问题？

AI 给出的 Contract 是否安全？

AI 给出的 transaction 是否正确？

如果 RPC 挂了怎么办？

如果 Chain Reorg 怎么办？
```

---

# 八、每周 8 小时应该这样分配

原来的：

```text
学习很多
+
周末集中写
```

现在调整成：

### 1.5h

```text
官方文档
源码
Etherscan
协议文档
```

### 5h

```text
项目开发
```

### 1h

```text
Debug
```

### 0.5h

```text
复盘
```

也就是：

```text
学习       20%
开发       60%
Debug      10%
复盘       10%
```

---

# 九、每周必须有一个“硬产出”

以后不要再用：

> “本周学习了 ABI、Event、Gas……”

作为完成标准。

每周必须有：

```text
Git Commit
+
可运行 Demo
+
一个技术问题
+
一个 Debug Case
```

例如 W20：

```text
Git Commit
Agent 转 ETH

Demo
Agent → Wallet → ETH Transfer

Debug Case
Invalid recipient

Technical Question
为什么 AI 不能直接完成交易？
```

---

# 十、每周复盘模板也升级

```markdown
# WXX 复盘

## 1. 本周产出

- [ ] Git Commit
- [ ] Demo
- [ ] README
- [ ] Debug Case

## 2. 本周核心概念

我能不能不用术语解释？

> 

## 3. 本周一个真实链上案例

Transaction：

> 

发生了什么：

> 

## 4. 本周最大的 Bug

现象：

> 

原因：

> 

解决：

> 

## 5. AI 帮我做了什么？

> 

## 6. AI 哪一次给错了？

> 

## 7. 我为什么能判断 AI 是错的？

> 

## 8. 系统设计

如果重新设计一次：

> 

## 9. 当前能力等级

L1 / L2 / L3 / L4 / L5 / L6 / L7

## 10. 下一周最重要的一件事

>
```

其中 **第 6、7 项非常重要**。

因为你未来真正需要训练的是：

> **AI Review 能力。**

---

# 十一、半年结束时，你应该能画出这样一张图

```text
                         User
                           │
                           ↓
                    ┌─────────────┐
                    │  AI Agent   │
                    └──────┬──────┘
                           │
                     Intent / Plan
                           │
                           ↓
                  ┌─────────────────┐
                  │   Tool Router   │
                  └────────┬────────┘
                           │
            ┌──────────────┼──────────────┐
            ↓              ↓              ↓
       Read Tools     DeFi Tools    Transaction Tools
            │              │              │
            ↓              ↓              ↓
          viem          Protocol       Simulation
            │              │              │
            └──────────────┼──────────────┘
                           ↓
                     Policy Engine
                           │
                     Risk Check
                           │
                           ↓
                      User Approval
                           │
                           ↓
                        Wallet
                           │
                           ↓
                    Smart Account
                           │
                           ↓
                      Ethereum
                           │
            ┌──────────────┼──────────────┐
            ↓              ↓              ↓
          State          Events         Tx
            │              │              │
            └──────────────┼──────────────┘
                           ↓
                        Indexer
                           │
                           ↓
                     Onchain Data
                           │
                           └────────────→ AI
```

如果半年后你真的能够**自己设计并实现这张图里的核心链路**，那你的定位就已经不是：

> “会 wagmi 的前端。”

而是：

> **懂 Ethereum 的 Application Engineer，并且具备 AI Agent + Web3 的实际开发能力。**

---

# 十二、我对这版计划最核心的判断

你的前五周实践已经暴露出了一个很重要的问题：

> **现在不能再用“我花了多少小时写代码”衡量学习进度。**

AI 让：

```text
写代码
Debug 常见错误
查 API
生成测试
```

都变快了。

所以你接下来应该主动把难度从：

```text
“实现一个功能”
```

提升到：

```text
“设计一个系统”
```

再提升到：

```text
“让 AI 实现这个系统”
```

最后提升到：

```text
“判断 AI 实现的系统是否可靠”
```

这就是我认为这半年真正应该训练的能力。

**所以从 W6 开始，不建议你再按“学一个知识点 → 做一个小 Demo”的方式走。直接项目驱动。**
