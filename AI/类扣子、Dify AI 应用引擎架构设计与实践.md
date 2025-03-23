## 你有做过自动化、批处理或者生成式 AI 相关的业务吗？说说你对于流程引擎理解和整体方案

- 自动化、批处理：重复性任务，并且抽象层次较高，将期望的任务列一个步骤，然后逐步执行。
- 生成式 AI：
  1. 搜索 baidu
  2. 提取关键字
  3. 清洗爬取数据
  4. 将这个数据给到某个大模型做一些数据分析
  5. 知识库优化
  6. 重复以上步骤
  7. 判断
  输入 -> 输出

### 流程引擎

自动化管理和执行既定的业务流程，业务流程可包括：自动化处理、批处理、AI 生成详细过程。

- 工作流流程建模（编辑器）
- 任务调度
  1. 异步处理
  2. 前后依赖
  3. 变量上下文
- 集成外部系统、插件化来实现流程功能生态

### AI 开发引擎

- 流程建模以及执行与上面相同
- LLM 节点
- 模型抽象插件（增强功能）

### 具体方案

- 内存型工作流（glide）
  - 所有的操作都在前端，内存型
- 服务端型工作流（retool）
  - OA 审批流
  - 低代码平台（应用型低代码、数据库型低代码、API 服务型低代码）流程处理
    - 应用型低代码: retool
    - 数据库型低代码、API 服务型低代码: Xnao、Xata
  - 大数据平台（袋鼠云、数仓、政企云）
    - 离线计算、实时计算 -> 算法处理 ... -> 落库 -> 数据服务化（大屏 JSON）
- 生成式 AI 引擎（coze、dify）
  - 调用大模型
  - 参数召回
  - 上下文缓存
  - 矢量数据库操作

## 流程引擎编辑器和执行器具体实现？

### 定义

流程引擎编辑器（前端）
流程引擎执行器（前端、服务端）

#### 内存型工作流

流程引擎编辑器 + 流程执行器 都在前端

1. 约定流程协议（json）
  - 节点 node：定义功能
  - 边 edge：用来约束节点，流程

```javascript
  const nodes = [
    {
      id: 'node-1',
      type: 'common',
      data: {
        // ...
      },
      position: {
        x: 0,
        y: 0
      }
    },
    {
      id: 'node-2',
      type: 'common',
      data: {
        // ...
      },
      position: {
        x: 0,
        y: 0
      }
    },
  ]
  const edges = [
    {
      id: 'e-1',
      source: '1',
      target: '2',
    }
  ]
```

2. 编辑器编排工作流数据
3. 开发工作流执行器

```javascript
async function executeWorkflow(nodeId) {
  const node = getNode(nodeId);
  switch(node.type) {
    case 'API_CALL':
      const response = await callApi(node.endpoint, node.params);
      return response;
    case 'UI_UPDATE':
      updateUI(node.data);
      return;
    default:
      throw new Error('Invalid node type');
  }
}
```

### 功能增强

1. 完全稳定可靠的日志系统
2. 上下文变量池
3. 错误机制处理

## 要构建一个完整生成式 AI 应用引擎，平台生态体系如何实际并实现?

在传统工作流流程基础上集成了更多功能：大模型、智能体搭建、插件、工作流、触发器、辅助功能

- 插件机制
- 工作流实现
- 触发器机制
- 知识库（RAG）

### 节点串联

- 开始节点
- 模型节点
- 插件节点
- 业务逻辑节点
- 子工作流节点
- 结束节点
- 流程化节点
