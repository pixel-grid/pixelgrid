import { BuildLayoutOptions, IColumnsCenterGrid } from '../grid.interfaces';

import getDocumentWidth from '../helpers/getDocumentWidth';

const columnsCenter: (
    root: HTMLElement,
    grid: IColumnsCenterGrid,
    options: BuildLayoutOptions
) => void = (root, grid, options) => {
    const container = document.createElement('div');

    container.setAttribute('data-layout-type', 'columns-center');

    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.bottom = '0';
    container.style.left = '0';
    container.style.right = '0';

    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'stretch';

    const columnsCount =
        grid.count !== undefined
            ? grid.count
            : Math.floor(getDocumentWidth() / (grid.width + grid.gutter));

    container.style.minWidth = `${grid.width * columnsCount +
        grid.gutter * (columnsCount - 1)}px`;

    for (let i = 1; i <= columnsCount; i = i + 1) {
        const column = createColumnElement(
            grid.width,
            grid.color,
            grid.opacity,
            // skip gutter for last item
            i !== columnsCount ? grid.gutter : 0
        );
        container.appendChild(column);
    }

    root.appendChild(container);
};

function createColumnElement(
    width: number,
    color: string,
    opacity: number | undefined,
    marginRight: number
): HTMLElement {
    const column = document.createElement('div');

    column.style.marginTop = '0';
    column.style.marginRight = `${marginRight}px`;
    column.style.marginBottom = '0';
    column.style.marginLeft = '0';
    column.style.width = `${width}px`;
    column.style.backgroundColor = color;

    if (opacity !== undefined) {
        column.style.opacity = String(opacity);
    }

    return column;
}

export default columnsCenter;
