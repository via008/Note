# 错误 ABI

如果是 ABI 中的字段名称写错，各字段影响如下：

- stateMutability：没影响
- type: `useWriteContract` 抛出错误：`AbiFunctionNotFoundError: Function not found on ABI. Make sure you are using the correct ABI and that the function exists on it. Docs: https://viem.sh/docs/contract/encodeFunctionData Version: viem@2.55.19`
- name:`useWriteContract` 抛出错误：`AbiFunctionNotFoundError: Function "transfer" not found on ABI. Make sure you are using the correct ABI and that the function exists on it. Docs: https://viem.sh/docs/contract/encodeFunctionData Version: viem@2.55.19`
- inputs: 
    - internalType: 没影响
    - type: `useWriteContract` 抛出错误: `InvalidAbiEncodingType: Type "address1" is not a valid encoding type. Please provide a valid ABI type. Docs: https://viem.sh/docs/contract/encodeAbiParameters Version: viem@2.55.19`
    - name: 没影响
- outputs：
    - internalType: 没影响
    - type: 没影响
    - name: 没影响



# 错误 Address

`useWriteContract` 抛出错误。

```
ContractFunctionExecutionError: Address "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C72381" is invalid. - Address must be a hex value of 20 bytes (40 hex characters). - Address must match its checksum counterpart. Request Arguments: chain: Sepolia (id: 11155111) from: 0x6C075De21F2E6A5aD753aD3f410932D86e203555 to: 0x1c7D4B196Cb0C7B01d743Fbc6116a902379C72381 data: 0xa9059cbb0000000000000000000000006c075de21f2e6a5ad753ad3f410932d86e2035550000000000000000000000000000000000000000000000000000000000000064 Contract Call: address: 0x1c7D4B196Cb0C7B01d743Fbc6116a902379C72381 function: transfer(address to, uint256 value) args: (0x6C075De21F2E6A5aD753aD3f410932D86e203555, 100) sender: 0x6C075De21F2E6A5aD753aD3f410932D86e203555 Docs: https://viem.sh/docs/contract/writeContract Version: viem@2.55.19
```

# 错误 functionName

`useWriteContract` 抛出错误。

```
AbiFunctionNotFoundError: Function "transfer1" not found on ABI. Make sure you are using the correct ABI and that the function exists on it. Docs: https://viem.sh/docs/contract/encodeFunctionData Version: viem@2.55.19
```

# 错误 args

- 超出参数数量：`useWriteContract` 抛出错误：`AbiEncodingLengthMismatchError: ABI encoding params/values length mismatch. Expected length (params): 2 Given length (values): 3 Version: viem@2.55.19`
- 没给参数：`AbiEncodingLengthMismatchError: ABI encoding params/values length mismatch. Expected length (params): 2 Given length (values): 0 Version: viem@2.55.19`

# 错误 chainId

- `useWaitForTransactionReceipt` 给了错误 chainId，则不会报错，页面会一直 loading，拿不到凭证。
