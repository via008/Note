import { useEffect, useMemo, useState } from 'react';
import classBind from 'classnames/bind';
import { debounce } from 'lodash';

import styles from './style.scss';

const cx = classBind.bind(styles);

export default function Drag({ children }) {
  const [top, setTop] = useState(300);
  const [bottomClass, setBottomClass] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouseY, setLastMouseY] = useState(null);
  const [lastScreenY, setLastScreenY] = useState(10000);

  useEffect(() => {
    const onMouseup = () => {
      setIsDragging(false);
    };
    window.addEventListener('mouseup', onMouseup);

    return () => {
      window.removeEventListener('mouseup', onMouseup);
    };
  }, []);

  const handleMouseDown = (e) => {
    if (isDragging) {
      setIsDragging(false);
    } else {
      setIsDragging(true);
      // 记录鼠标位置
      setLastMouseY(e.clientY);
    }
  };

  const handleMouseMove = debounce((e) => {
    if (isDragging) {
      const { clientY } = e;
      const tempY = clientY - lastMouseY;
      const tempHeight = window.innerHeight - e.clientY;
      // 记录上一次的鼠标位置
      setLastMouseY(clientY);
      // 记录上一次屏幕的位置
      setLastScreenY(tempHeight);

      if (tempHeight < 100 || lastScreenY < 100) {
        setBottomClass(true);
        return;
      }

      const tempTop = top + tempY;
      const newTop = tempTop < 21
        ? 21
        : tempTop;
      setBottomClass(false);
      setTop(newTop);
    }
  }, 10);

  return <div
    onMouseMove={handleMouseMove}
    className={cx('drag-wrap')}>
    <div className={`${cx('drag-top')} }`}>
      <div className={`${isDragging ? cx('dragging-mask') : ''}`} />
      {children?.[0]}
    </div>
    <div
      className={`${cx('drag-bottom')} ${isDragging ? cx('dragging') : ''} ${bottomClass ? cx('max-bottom') : ''}`}
      style={{ top: `${top}px` }}>
      <div
        className={cx('handle-controller')}
        onMouseDown={handleMouseDown}>
        <div className={cx('show')} />
      </div>
      {children?.[1]}
    </div>
  </div>;
}
