const stateArray = [];
let stateIndex = 0;

function useState(initVal) {
    const curIndex = stateIndex;

    if (stateArray[curIndex] === undefined) {
        stateArray[curIndex] = typeof initVal === 'function' ? initVal() : initVal;
    }

    const state = stateArray[curIndex];

    const setState = (newState) => {
        const nextState = typeof newState === 'function' ? newState(state) : newState;

        if (nextState !== state) {
            stateArray[curIndex] = nextState;
        }

        render();
    }

    stateIndex ++;

    return [state, setState];
}

function render() {
    stateIndex = 0;


    // ...重新渲染组件
}