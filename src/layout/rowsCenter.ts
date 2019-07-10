import { IRowsCenterGrid } from '../grid.interfaces';
import getDocumentHeight from '../helpers/getDocumentHeight';

const rowsCenter: (root: HTMLElement, grid: IRowsCenterGrid) => void = (
    root,
    grid
) => {
    const container = document.createElement('div');

    container.setAttribute('data-layout-type', 'rows-center');

    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.bottom = '0';
    container.style.left = '0';
    container.style.right = '0';

    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'stretch';

    const rowsCount =
        grid.count !== undefined
            ? grid.count
            : Math.floor(getDocumentHeight() / (grid.height + grid.gutter));

    container.style.minHeight = `${grid.height * rowsCount +
        grid.gutter * (rowsCount - 1)}px`;

    for (let i = 1; i <= rowsCount; i++) {
        const column = createRowElement(
            grid.height,
            grid.color,
            // skip gutter for last item
            i !== rowsCount ? grid.gutter : 0
        );
        container.appendChild(column);
    }

    root.appendChild(container);
};

function createRowElement(
    height: number,
    color: string,
    marginBottom: number
): HTMLElement {
    const column = document.createElement('div');

    column.style.marginTop = '0';
    column.style.marginRight = '0';
    column.style.marginBottom = `${marginBottom}px`;
    column.style.marginLeft = '0';
    column.style.height = `${height}px`;
    column.style.backgroundColor = color;

    return column;
}

export default rowsCenter;
