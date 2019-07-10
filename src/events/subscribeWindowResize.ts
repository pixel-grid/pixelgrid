const subscribeWindowResize: (onResize: () => void) => () => void = (
    onResize
) => {
    let running = false;

    const handler: () => void = () => {
        if (running) {
            return;
        }
        running = true;
        requestAnimationFrame(function() {
            onResize();
            running = false;
        });
    };

    window.addEventListener('resize', handler);

    return handler;
};

export default subscribeWindowResize;
