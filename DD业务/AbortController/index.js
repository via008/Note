// 创建一个带有可以取消请求标志的 axios 实例
const createInstance = () => {
  const controller = new AbortController();
  const customAxiosInstance = {
      controller,
      instance: axios.create({
          signal: controller.signal,        
      })            
  }
  // ...为实例设置拦截器等
  // ...
  return customAxiosInstance;
}

// 保存对应路由下创建的实例
const axiosInstances = {};
// 创建实例(每个路由下创建一个对应的实例)
const getInstance = (pathname) => {
  // signal.aborted 代表该实例下的与之通信的请求是否已经被终止(true)或未终止(false)
  if (axiosInstances[pathname] && !axiosInstances[pathname].controller.signal.aborted) {
      return axiosInstances[pathname].instance;
  }
  const customAxiosInstance = createInstance();
  axiosInstances[pathname] = customAxiosInstance;
  return customAxiosInstance.instance;
}

// 取消还未完成的请求
const cancelPreviousPageRequests = (prePagePath) => {
  axiosInstances[prePagePath]?.controller.abort();
}