// 方法一：添加 paste 监听事件
useEffect(()=>{
  //解决粘贴图片默认图问题
  const pasteEvent = (event) => {
    const clipboardData = event.clipboardData ;
    if (clipboardData.items && clipboardData.items[0].type.includes('image')) {
      event.preventDefault();
      const items = clipboardData.items;
      let blob = null;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          blob = items[i].getAsFile();
        }
      }
      if ( blob !== null ) {
      const that = quillRef.current;
      const formdata = new FormData();
      formdata.append('file', blob);
      // 上传接口请求
      uploadImg(formdata)
        .then(res => {
          const quill = that?.getEditor(); // 获取到编辑器本身
          const cursorPosition = quill.getSelection()?.index; // 获取当前光标位置
          const link = res.linkUrl;
          quill.insertEmbed(cursorPosition, 'image', link); // 插入图片
          quill.setSelection(cursorPosition + 1); // 光标位置加1
        })
        .catch((error) => {
          message.error('图片插入失败');
        });
    }
  }
}
editorRef?.current?.addEventListener('paste', pasteEvent);
return () => {
  editorRef?.current?.removeEventListener('paste', pasteEvent)
}
},[]);

// 方法二：处理 base64 文件
const base64ToBlob = ({ b64data = '', contentType = '', sliceSize = 512 } = {}) => new Promise(resolve => {
  // 使用 atob() 方法将数据解码
  const byteCharacters = atob(b64data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = [];
    for (let i = 0; i < slice.length; i++) {
      byteNumbers.push(slice.charCodeAt(i));
    }
    // 8 位无符号整数值的类型化数组。内容将初始化为 0。
    // 如果无法分配请求数目的字节，则将引发异常。
    byteArrays.push(new Uint8Array(byteNumbers));
  }
  let result = new Blob(byteArrays, {
    type: contentType
  });
  result = Object.assign(result, {
    // 这里一定要处理一下 URL.createObjectURL
    preview: URL.createObjectURL(result),
    name: 'XXX.png'
  });
  resolve(result);
});

const onChange = (...arg) => {
  const [contents, delta, , func] = arg;
  const { getHTML } = func;
  const deltaData = delta?.ops?.[1]?.insert?.image || delta?.ops?.[0]?.insert?.image;

  // 这个是为了兼容 modules 变更过程中触发了 onChange 事件
  if (contents === '<p><br></p>') {
    return;
  }

  if (deltaData?.includes?.('base64')) {
    const base64 = deltaData.split(',')[1];
    const type = deltaData.split(',')[0].split(';')[0].split(':')[1];
    base64ToBlob({ b64data: base64, contentType: type }).then(file => {
      const formdata = new FormData();
      formdata.append('file', file);
      // 转后后的blob对象
      uploadImg(formdata)
        .then(res => {
          const link = res.linkUrl;
          const newDom = getHTML().replace(deltaData, link);
          onChange?.(newDom)
        })
        .catch((error) => {
          const newDom = getHTML().replace(deltaData, '');
          onChange?.(newDom)
          message.error('图片插入失败');
        });
    });
  } else {
    onChange?.(contents)
  }
};
