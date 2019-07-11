import { IRowsTopGrid } from '../grid.interfaces';
import getDocumentHeight from '../helpers/getDocumentHeight';

const rowsTop: (root: HTMLElement, grid: IRowsTopGrid) => void = (
    root,
    grid
) => {
    const container = document.createElement('div');

    container.setAttribute('data-layout-type', 'rows-top');

    container.style.position = 'absolute';
    container.style.top = `${grid.offset}px`;
    container.style.bottom = '0';
    container.style.left = '0';
    container.style.right = '0';

    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'flex-start';
    container.style.alignItems = 'stretch';

    const rowsCount =
        grid.count !== undefined
            ? grid.count
            : Math.floor(
                  (getDocumentHeight() - grid.offset) /
                      (grid.height + grid.gutter)
              );

    for (let i = 1; i <= rowsCount; i++) {
        const column = createRowElement(
            grid.height,
            grid.color,
            grid.opacity,
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
    opacity: number | undefined,
    marginBottom: number
): HTMLElement {
    const column = document.createElement('div');

    column.style.marginTop = '0';
    column.style.marginRight = '0';
    column.style.marginBottom = `${marginBottom}px`;
    column.style.marginLeft = '0';
    column.style.height = `${height}px`;
    column.style.backgroundColor = color;

    if (opacity !== undefined) {
        column.style.opacity = String(opacity);
    }

    return column;
}

export default rowsTop;
