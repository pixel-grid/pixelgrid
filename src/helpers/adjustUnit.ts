export default (value: number, useRem?: boolean, remRootValue?: number) => {
    if (!useRem) {
        return `${value}px`;
    } else {
        const rootFontSize =
            remRootValue && remRootValue > 0
                ? remRootValue
                : parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size')) || 16;

        return `${value / rootFontSize}rem`;
    }
};
