import { BuildLayoutOptions, IRowsBottomGrid } from '../grid.interfaces';

import adjustUnit from '../helpers/adjustUnit';
import getDocumentHeight from '../helpers/getDocumentHeight';

const rowsBottom: (root: HTMLElement, grid: IRowsBottomGrid, options: BuildLayoutOptions) => void = (root, grid, options) => {
    const container = document.createElement('div');

    container.setAttribute('data-layout-type', 'rows-top');

    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.bottom = adjustUnit(grid.offset, options.useRem, options.remRootValue);
    container.style.left = '0';
    container.style.right = '0';

    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'flex-end';
    container.style.alignItems = 'stretch';

    const rowsCount = grid.count !== undefined ? grid.count : Math.floor((getDocumentHeight() - grid.offset) / (grid.height + grid.gutter));

    for (let i = 1; i <= rowsCount; i = i + 1) {
        const column = createRowElement(
            grid.height,
            grid.color,
            grid.opacity,
            // skip gutter for last item
            i !== rowsCount ? grid.gutter : 0,
            options
        );
        container.appendChild(column);
    }

    root.appendChild(container);
};

function createRowElement(
    height: number,
    color: string,
    opacity: number | undefined,
    marginBottom: number,
    options: BuildLayoutOptions
): HTMLElement {
    const column = document.createElement('div');

    column.style.marginTop = '0';
    column.style.marginRight = '0';
    column.style.marginBottom = adjustUnit(marginBottom, options.useRem, options.remRootValue);
    column.style.marginLeft = '0';
    column.style.height = adjustUnit(height, options.useRem, options.remRootValue);
    column.style.backgroundColor = color;

    if (opacity !== undefined) {
        column.style.opacity = String(opacity);
    }

    return column;
}

export default rowsBottom;
