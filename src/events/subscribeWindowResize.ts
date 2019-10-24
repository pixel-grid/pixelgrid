const subscribeWindowResize: (onResize: () => void) => () => void = (onResize) => {
    let running = false;

    const handler: () => void = () => {
        if (running) {
            return;
        }
        running = true;
        requestAnimationFrame(() => {
            onResize();
            running = false;
        });
    };

    window.addEventListener('resize', handler);

    return handler;
};

export default subscribeWindowResize;
