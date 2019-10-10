import { BuildLayoutOptions, IRowsStretchGrid } from '../grid.interfaces';

import adjustUnit from '../helpers/adjustUnit';

const rowsStretch: (root: HTMLElement, grid: IRowsStretchGrid, options: BuildLayoutOptions) => void = (root, grid, options) => {
    const container = document.createElement('div');

    container.setAttribute('data-layout-type', 'rows-stretch');

    container.style.position = 'absolute';
    container.style.top = adjustUnit(grid.margin, options.useRem, options.remRootValue);
    container.style.bottom = adjustUnit(grid.margin, options.useRem, options.remRootValue);
    container.style.left = '0';
    container.style.right = '0';

    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'stretch';

    if (grid.count !== undefined) {
        for (let i = 1; i <= grid.count; i = i + 1) {
            const column = createRowElement(
                grid.color,
                grid.opacity,
                // skip gutter for last item
                i !== grid.count ? grid.gutter : 0,
                options
            );
            container.appendChild(column);
        }
    }

    root.appendChild(container);
};

function createRowElement(color: string, opacity: number | undefined, marginBottom: number, options: BuildLayoutOptions): HTMLElement {
    const column = document.createElement('div');

    column.style.marginTop = '0';
    column.style.marginRight = '0';
    column.style.marginBottom = adjustUnit(marginBottom, options.useRem, options.remRootValue);
    column.style.marginLeft = '0';
    column.style.flexGrow = '1';
    column.style.backgroundColor = color;

    if (opacity !== undefined) {
        column.style.opacity = String(opacity);
    }

    return column;
}

export default rowsStretch;
