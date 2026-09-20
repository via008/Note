# 没有连接钱包

writeContract.ts:218 Uncaught (in promise) AccountNotFoundError: Could not find an Account to execute with this Action.
Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.

Docs: https://viem.sh/docs/contract/writeContract#account
Version: viem@2.55.19
    at Object.handleSubmit [as onClick] (index.tsx:9:35


# 单位问题
toHex.ts:188 Uncaught (in promise) RangeError: The number 0.01 cannot be converted to a BigInt because it is not an integer
    at BigInt (<anonymous>)
    at numberToHex (toHex.ts:188:17)
    at encodeNumber (encodeAbiParameters.ts:355:25)
    at prepareParam (encodeAbiParameters.ts:168:12)
    at prepareParams (encodeAbiParameters.ts:125:25)
    at encodeAbiParameters (encodeAbiParameters.ts:100:26)
    at encodeFunctionData (encodeFunctionData.ts:92:28)
    at writeContract.internal (writeContract.ts:223:36)
    at writeContract (writeContract.ts:175:24)
    at writeContract (wallet.ts:1446:43
    at Proxy.<anonymous> (getContract.ts:725:16
    at Object.handleSubmit [as onClick] (index.tsx:12:35


# ❌ RPC 不支持 wallet_sendTransaction
Uncaught (in promise) ContractFunctionExecutionError: RPC Request failed.

URL: https://11155111.rpc.thirdweb.com
Request body: {"method":"wallet_sendTransaction","params":[{"data":"0xa9059cbb0000000000000000000000006c075de21f2e6a5ad753ad3f410932d86e2035550000000000000000000000000000000000000000000000000000000000002710","from":"0x6C075De21F2E6A5aD753aD3f410932D86e203555","to":"0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"}]}
 
Request Arguments:
  from:  0x6C075De21F2E6A5aD753aD3f410932D86e203555
  to:    0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238
  data:  0xa9059cbb0000000000000000000000006c075de21f2e6a5ad753ad3f410932d86e2035550000000000000000000000000000000000000000000000000000000000002710
 
Contract Call:
  address:   0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238
  function:  transfer(address to, uint256 value)
  args:              (0x6C075De21F2E6A5aD753aD3f410932D86e203555, 10000)
  sender:    0x6C075De21F2E6A5aD753aD3f410932D86e203555

Docs: https://viem.sh/docs/contract/writeContract
Details: this request method is not supported
Version: viem@2.55.19
    at getContractError (getContractError.ts:82:10)
    at writeContract.internal (writeContract.ts:241:29)
    at async Object.handleSubmit [as onClick] (index.tsx:14:9)Caused by: TransactionExecutionError: RPC Request failed.

URL: https://11155111.rpc.thirdweb.com
Request body: {"method":"wallet_sendTransaction","params":[{"data":"0xa9059cbb0000000000000000000000006c075de21f2e6a5ad753ad3f410932d86e2035550000000000000000000000000000000000000000000000000000000000002710","from":"0x6C075De21F2E6A5aD753aD3f410932D86e203555","to":"0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"}]}
 
Request Arguments:
  from:  0x6C075De21F2E6A5aD753aD3f410932D86e203555
  to:    0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238
  data:  0xa9059cbb0000000000000000000000006c075de21f2e6a5ad753ad3f410932d86e2035550000000000000000000000000000000000000000000000000000000000002710

Details: this request method is not supported
Version: viem@2.55.19
    at getTransactionError (getTransactionError.ts:44:10)
    at sendTransaction (sendTransaction.ts:397:30)
    at async writeContract.internal (writeContract.ts:230:14)
    at async Object.handleSubmit [as onClick] (index.tsx:14:9)Caused by: RpcRequestError: RPC Request failed.

URL: https://11155111.rpc.thirdweb.com
Request body: {"method":"wallet_sendTransaction","params":[{"data":"0xa9059cbb0000000000000000000000006c075de21f2e6a5ad753ad3f410932d86e2035550000000000000000000000000000000000000000000000000000000000002710","from":"0x6C075De21F2E6A5aD753aD3f410932D86e203555","to":"0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"}]}

Details: this request method is not supported
Version: viem@2.55.19
    at request (http.ts:177:19)
    at async buildRequest.ts:163:22
    at async attemptRetry (withRetry.ts:63:22)
getContractError @ getContractError.ts:82
internal @ writeContract.ts:241
await in internal
writeContract @ writeContract.ts:175
（匿名） @ wallet.ts:1446
（匿名） @ getContract.ts:725
（匿名） @ index.tsx:14
await in （匿名）
e @ Button.js:185
executeDispatch @ react-dom-client.development.js:20693
runWithFiberInDEV @ react-dom-client.development.js:1027
processDispatchQueue @ react-dom-client.development.js:20743
（匿名） @ react-dom-client.development.js:21312
batchedUpdates$1 @ react-dom-client.development.js:3414
dispatchEventForPluginEventSystem @ react-dom-client.development.js:20897
dispatchEvent @ react-dom-client.development.js:25932
dispatchDiscreteEvent @ react-dom-client.development.js:25900
<button>
（匿名） @ react.development.js:1137
（匿名） @ Button.js:286
react_stack_bottom_frame @ react-dom-client.development.js:28360
renderWithHooksAgain @ react-dom-client.development.js:8087
renderWithHooks @ react-dom-client.development.js:7999
updateForwardRef @ react-dom-client.development.js:10067
beginWork @ react-dom-client.development.js:12487
runWithFiberInDEV @ react-dom-client.development.js:1027
performUnitOfWork @ react-dom-client.development.js:19065
workLoopConcurrentByScheduler @ react-dom-client.development.js:19059
renderRootConcurrent @ react-dom-client.development.js:19041
performWorkOnRoot @ react-dom-client.development.js:17896
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20554
performWorkUntilDeadline @ scheduler.development.js:45
<Button>
（匿名） @ react-jsx-dev-runtime.development.js:342
USDCWrite @ index.tsx:27
react_stack_bottom_frame @ react-dom-client.development.js:28360
renderWithHooksAgain @ react-dom-client.development.js:8087
renderWithHooks @ react-dom-client.development.js:7999
updateFunctionComponent @ react-dom-client.development.js:10512
beginWork @ react-dom-client.development.js:12148
runWithFiberInDEV @ react-dom-client.development.js:1027
performUnitOfWork @ react-dom-client.development.js:19065
workLoopConcurrentByScheduler @ react-dom-client.development.js:19059
renderRootConcurrent @ react-dom-client.development.js:19041
performWorkOnRoot @ react-dom-client.development.js:17896
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20554
performWorkUntilDeadline @ scheduler.development.js:45
<USDCWrite>
（匿名） @ react-jsx-dev-runtime.development.js:342
App @ page.tsx:11
react_stack_bottom_frame @ react-dom-client.development.js:28360
renderWithHooksAgain @ react-dom-client.development.js:8087
renderWithHooks @ react-dom-client.development.js:7999
updateFunctionComponent @ react-dom-client.development.js:10512
beginWork @ react-dom-client.development.js:12148
runWithFiberInDEV @ react-dom-client.development.js:1027
performUnitOfWork @ react-dom-client.development.js:19065
workLoopConcurrentByScheduler @ react-dom-client.development.js:19059
renderRootConcurrent @ react-dom-client.development.js:19041
performWorkOnRoot @ react-dom-client.development.js:17896
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20554
performWorkUntilDeadline @ scheduler.development.js:45
<App>
（匿名） @ react-jsx-runtime.development.js:342
ClientPageRoot @ client-page.tsx:56
react_stack_bottom_frame @ react-dom-client.development.js:28360
renderWithHooksAgain @ react-dom-client.development.js:8087
renderWithHooks @ react-dom-client.development.js:7999
updateFunctionComponent @ react-dom-client.development.js:10512
beginWork @ react-dom-client.development.js:12090
runWithFiberInDEV @ react-dom-client.development.js:1027
performUnitOfWork @ react-dom-client.development.js:19065
workLoopConcurrentByScheduler @ react-dom-client.development.js:19059
renderRootConcurrent @ react-dom-client.development.js:19041
performWorkOnRoot @ react-dom-client.development.js:17896
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:20554
performWorkUntilDeadline @ scheduler.development.js:45
"use client"
Promise.all @ VM1049 <anonymous>:1
initializeElement @ react-server-dom-turbopack-client.browser.development.js:2007
"use server"
ResponseInstance @ react-server-dom-turbopack-client.browser.development.js:2875
createResponseFromOptions @ react-server-dom-turbopack-client.browser.development.js:4848
（匿名） @ react-server-dom-turbopack-client.browser.development.js:5259
（匿名） @ app-index.tsx:269
（匿名） @ hmr-runtime.ts:652
runModuleExecutionHooks @ dev-base.ts:213
instantiateModuleShared @ hmr-runtime.ts:650
instantiateModule @ dev-base.ts:181
（匿名） @ dev-base.ts:135
commonJsRequire @ runtime-utils.ts:513
（匿名） @ app-next-turbopack.ts:12
（匿名） @ app-bootstrap.ts:79
loadScriptsInSequence @ app-bootstrap.ts:23
appBootstrap @ app-bootstrap.ts:61
（匿名） @ app-next-turbopack.ts:11
（匿名） @ hmr-runtime.ts:652
runModuleExecutionHooks @ dev-base.ts:213
instantiateModuleShared @ hmr-runtime.ts:650
instantiateModule @ dev-base.ts:181
getOrInstantiateRuntimeModule @ dev-base.ts:101
registerChunk @ runtime-backend-dom.ts:68
await in registerChunk
registerChunk @ dev-base.ts:569
（匿名） @ dev-backend-dom.ts:145
（匿名） @ dev-backend-dom.ts:145


Caused by: TransactionExecutionError: The current chain of the wallet (id: 1) does not match the target chain for the transaction (id: 11155111 – Sepolia).