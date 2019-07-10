const subscribeWindowResize: (handler: () => void) => void = (handler) => {
    window.removeEventListener('resize', handler);
};

export default subscribeWindowResize;
