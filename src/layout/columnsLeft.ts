import { BuildLayoutOptions, IColumnsLeftGrid } from '../grid.interfaces';

import adjustUnit from '../helpers/adjustUnit';
import getDocumentWidth from '../helpers/getDocumentWidth';

const columnsLeft: (root: HTMLElement, grid: IColumnsLeftGrid, options: BuildLayoutOptions) => void = (root, grid, options) => {
    const container = document.createElement('div');

    container.setAttribute('data-layout-type', 'columns-left');

    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.bottom = '0';
    container.style.left = adjustUnit(grid.offset, options.useRem, options.remRootValue);
    container.style.right = '0';

    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'flex-start';
    container.style.alignItems = 'stretch';

    const columnsCount =
        grid.count !== undefined ? grid.count : Math.floor((getDocumentWidth() - grid.offset) / (grid.width + grid.gutter));

    for (let i = 1; i <= columnsCount; i = i + 1) {
        const column = createColumnElement(
            grid.width,
            grid.color,
            grid.opacity,
            // skip gutter for last item
            i !== columnsCount ? grid.gutter : 0,
            options
        );
        container.appendChild(column);
    }

    root.appendChild(container);
};

function createColumnElement(
    width: number,
    color: string,
    opacity: number | undefined,
    marginRight: number,
    options: BuildLayoutOptions
): HTMLElement {
    const column = document.createElement('div');

    column.style.marginTop = '0';
    column.style.marginRight = adjustUnit(marginRight, options.useRem, options.remRootValue);
    column.style.marginBottom = '0';
    column.style.marginLeft = '0';
    column.style.width = adjustUnit(width, options.useRem, options.remRootValue);
    column.style.backgroundColor = color;

    if (opacity !== undefined) {
        column.style.opacity = String(opacity);
    }

    return column;
}

export default columnsLeft;
