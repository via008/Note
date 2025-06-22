/**
 * - 状态：startTime，current
 * - 方法：start，stop
 * - performance.now / Date.now
 * - requestAnimationFrame / setInterval
 */

// 组件
function TimerComponent() {
    const [startTime, setStartTime] = useState(null);
    const [current, setCurrent] = useState(null);
    const ref = useRef(null);
  
    const update = () => {
      ref.current = requestAnimationFrame(() => {
        setCurrent(Date.now());
        update();
      });
    };
  
    const handleStart = () => {
      setStartTime(Date.now());
      update();
    };
  
    const handlePause = () => {
      cancelAnimationFrame(ref.current);
    };
  
    let showTime = 0;
    if (startTime !== null && current !== null) {
      showTime = (current - startTime) / 1000;
    }
  
    return <div>
      <div>{showTime.toFixed(0)}</div>
      <Button onClick={handleStart}>开始</Button>
      <Button onClick={handlePause}>暂停</Button>
    </div>;
  }


// 类
class Timer {
    constructor() {
        this.running = false;
        this.startTime = 0;
        this.elapsedTime = 0;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.startTime = performance.now();
            this.update();
        }
    }

    update() {
        if (this.running) {
            this.elapsedTime = performance.now() - this.startTime;
            this.display();
            requestAnimationFrame(() => this.update());
        }
    }

    display() {
        const seconds = Math.floor(this.elapsedTime / 1000 % 60);
        const minutes = Math.floor(this.elapsedTime / 1000 / 60 % 60);
        const hours = Math.floor(this.elapsedTime / 1000 / 60 / 60 % 24)

        console.log(`${hours}:${minutes}:${seconds}`);
        return `${hours}:${minutes}:${seconds}`;
    }
}

const timer = new Timer();
timer.start();