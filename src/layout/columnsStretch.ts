import { BuildLayoutOptions, IColumnsStretchGrid } from '../grid.interfaces';

import adjustUnit from '../helpers/adjustUnit';

const columnsStretch: (root: HTMLElement, grid: IColumnsStretchGrid, options: BuildLayoutOptions) => void = (root, grid, options) => {
    const container = document.createElement('div');

    container.setAttribute('data-layout-type', 'columns-stretch');

    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.bottom = '0';
    container.style.left = adjustUnit(grid.margin, options.useRem, options.remRootValue);
    container.style.right = adjustUnit(grid.margin, options.useRem, options.remRootValue);

    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'stretch';

    if (grid.count !== undefined) {
        for (let i = 1; i <= grid.count; i = i + 1) {
            const column = createColumnElement(
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

function createColumnElement(color: string, opacity: number | undefined, marginRight: number, options: BuildLayoutOptions): HTMLElement {
    const column = document.createElement('div');

    column.style.marginTop = '0';
    column.style.marginRight = adjustUnit(marginRight, options.useRem, options.remRootValue);
    column.style.marginBottom = '0';
    column.style.marginLeft = '0';
    column.style.flexGrow = '1';
    column.style.backgroundColor = color;

    if (opacity !== undefined) {
        column.style.opacity = String(opacity);
    }

    return column;
}

export default columnsStretch;
