import { IGrid } from '../grid.interfaces';

const grid: (root: HTMLElement, grid: IGrid) => void = (root, grid) => {
    const container = document.createElement('div');

    container.setAttribute('data-layout-type', 'grid');

    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.bottom = '0';
    container.style.left = '0';
    container.style.right = '0';

    const svg = `<svg width="${grid.size}" height="${
        grid.size
    }" xmlns="http://www.w3.org/2000/svg"><path stroke="${grid.color}" d="M${
        grid.size
    } 0v${grid.size}M0 ${grid.size}h${grid.size}"/></svg>`;

    const img = new Image();
    img.src = `data:image/svg+xml;base64,${window.btoa(svg)}`;

    container.style.backgroundImage = `url(${img.src})`;

    root.appendChild(container);
};

export default grid;
