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