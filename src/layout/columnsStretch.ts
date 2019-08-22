import { BuildLayoutOptions, IColumnsStretchGrid } from '../grid.interfaces';

const columnsStretch: (
    root: HTMLElement,
    grid: IColumnsStretchGrid,
    options: BuildLayoutOptions
) => void = (root, grid, options) => {
    const container = document.createElement('div');

    container.setAttribute('data-layout-type', 'columns-stretch');

    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.bottom = '0';
    container.style.left = `${grid.margin}px`;
    container.style.right = `${grid.margin}px`;

    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'stretch';

    if (grid.count !== undefined) {
        for (let i = 1; i <= grid.count; i++) {
            const column = createColumnElement(
                grid.color,
                grid.opacity,
                // skip gutter for last item
                i !== grid.count ? grid.gutter : 0
            );
            container.appendChild(column);
        }
    }

    root.appendChild(container);
};

function createColumnElement(
    color: string,
    opacity: number | undefined,
    marginRight: number
): HTMLElement {
    const column = document.createElement('div');

    column.style.marginTop = '0';
    column.style.marginRight = `${marginRight}px`;
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
