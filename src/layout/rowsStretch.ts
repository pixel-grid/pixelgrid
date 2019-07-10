import { IRowsStretchGrid } from '../grid.interfaces';

const rowsStretch: (root: HTMLElement, grid: IRowsStretchGrid) => void = (
    root,
    grid
) => {
    const container = document.createElement('div');

    container.setAttribute('data-layout-type', 'rows-stretch');

    container.style.position = 'absolute';
    container.style.top = `${grid.margin}px`;
    container.style.bottom = `${grid.margin}px`;
    container.style.left = '0';
    container.style.right = '0';

    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'stretch';

    if (grid.count !== undefined) {
        for (let i = 1; i <= grid.count; i++) {
            const column = createRowElement(
                grid.color,
                // skip gutter for last item
                i !== grid.count ? grid.gutter : 0
            );
            container.appendChild(column);
        }
    }

    root.appendChild(container);
};

function createRowElement(color: string, marginBottom: number): HTMLElement {
    const column = document.createElement('div');

    column.style.marginTop = '0';
    column.style.marginRight = '0';
    column.style.marginBottom = `${marginBottom}px`;
    column.style.marginLeft = '0';
    column.style.flexGrow = '1';
    column.style.backgroundColor = color;

    return column;
}

export default rowsStretch;
