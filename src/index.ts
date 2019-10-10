import 'core-js/features/array/find';

import {
    BuildLayoutOptions,
    IColumnsCenterGrid,
    IColumnsGrid,
    IColumnsLeftGrid,
    IColumnsRightGrid,
    IColumnsStretchGrid,
    IGrid,
    IGridBase,
    IPreset,
    IRowsBottomGrid,
    IRowsCenterGrid,
    IRowsGrid,
    IRowsStretchGrid,
    IRowsTopGrid
} from './grid.interfaces';

import buildLayout from './buildLayout';
import buildRootElement from './dom/buildRootElement';
import defaultPreset from './defaultPreset';
import invalidateGridHeight from './dom/invalidateGridHeight';
import subscribeWindowResize from './events/subscribeWindowResize';
import unsubscribeWindowResize from './events/unsubscribeWindowResize';

function isRowColumnGrid(grid: IGridBase): grid is IColumnsGrid | IRowsGrid {
    return (grid as IColumnsGrid | IRowsGrid).count !== undefined;
}

function isGridColumnRowCountAuto(grid: IGridBase): boolean {
    if (isRowColumnGrid(grid)) {
        return grid.count === undefined;
    }

    return false;
}

export function initializeGrid(
    presets: IPreset[],
    options: BuildLayoutOptions = {
        zIndex: 10000
    }
): { root: HTMLElement; resizeHandler: () => void } {
    const grid = buildRootElement('pixelgrid', options);

    // Run layout rebuild on every window resize in case if media query is defined or
    // row/column count is not defined (should be determined automatically).
    // Otherwise layout won't be built on every resize.
    const needtoRebuildOnWindowResize: boolean =
        presets.find(
            (preset) =>
                preset.mediaQuery !== undefined ||
                (preset.grids && preset.grids.find((grid) => grid.type !== 'grid' && isGridColumnRowCountAuto(grid))) !== undefined
        ) !== undefined;

    let resizeHandler: (() => void) | undefined = undefined;
    if (needtoRebuildOnWindowResize) {
        resizeHandler = subscribeWindowResize(() => {
            invalidateGridHeight(grid);
            buildLayout(grid, presets, options);
        });
    } else {
        resizeHandler = subscribeWindowResize(() => invalidateGridHeight(grid));
    }

    invalidateGridHeight(grid);
    buildLayout(grid, presets, options);

    return { resizeHandler, root: grid };
}

export function destroyGrid(grid: { root: HTMLElement; resizeHandler: () => void }): void {
    if (grid) {
        if (grid.root && grid.root.parentElement) {
            grid.root.parentElement.removeChild(grid.root);
        }

        if (grid.resizeHandler) {
            unsubscribeWindowResize(grid.resizeHandler);
        }
    }
}

export {
    IColumnsCenterGrid,
    IColumnsGrid,
    IColumnsLeftGrid,
    IColumnsRightGrid,
    IColumnsStretchGrid,
    IGrid,
    IGridBase,
    IPreset,
    IRowsCenterGrid,
    IRowsGrid,
    IRowsStretchGrid,
    IRowsBottomGrid,
    IRowsTopGrid,
    defaultPreset
};
