function switchMapWrapper(fn) {
  // 当前正在处理的请求ID
  let id = 0;
  // 最新的请求ID
  let lastId = 0;
  // 最新请求的返回数据
  let cacheRes;
  return async (...args) => {
      const temp = id;
      // 确保每一次请求都能有一个唯一ID
      id ++;
      const res = await fn(...args);
      if (temp< lastId) {
          return  cacheRes;         
      } 
      lastId = temp;
      cacheRes = res;
      return res;
  }
}