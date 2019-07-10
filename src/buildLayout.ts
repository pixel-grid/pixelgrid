import {
    IColumnsCenterGrid,
    IColumnsLeftGrid,
    IColumnsStretchGrid,
    IGrid,
    IPreset,
    IRowsCenterGrid,
    IRowsStretchGrid,
    IRowsTopGrid
} from './grid.interfaces';

import columnsCenter from './layout/columnsCenter';
import columnsLeft from './layout/columnsLeft';
import columnsStretch from './layout/columnsStretch';
import gridLayout from './layout/grid';
import rowsCenter from './layout/rowsCenter';
import rowsStretch from './layout/rowsStretch';
import rowsTop from './layout/rowsTop';

const buildLayout: (root: HTMLElement, presets: IPreset[]) => void = (
    root,
    presets
) => {
    if (root) {
        // Cleanup root element
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }

        // Build grid layouts
        if (presets) {
            for (const preset of presets.filter(
                (p) =>
                    p.grids &&
                    p.grids.length > 0 &&
                    (!p.mediaQuery || window.matchMedia(p.mediaQuery).matches)
            )) {
                for (const grid of preset.grids) {
                    if (grid.type === 'grid') {
                        gridLayout(root, grid as IGrid);
                    } else if (grid.type === 'columns-center') {
                        columnsCenter(root, grid as IColumnsCenterGrid);
                    } else if (grid.type === 'columns-stretch') {
                        columnsStretch(root, grid as IColumnsStretchGrid);
                    } else if (grid.type === 'columns-left') {
                        columnsLeft(root, grid as IColumnsLeftGrid);
                    } else if (grid.type === 'rows-center') {
                        rowsCenter(root, grid as IRowsCenterGrid);
                    } else if (grid.type === 'rows-stretch') {
                        rowsStretch(root, grid as IRowsStretchGrid);
                    } else if (grid.type === 'rows-top') {
                        rowsTop(root, grid as IRowsTopGrid);
                    } else {
                        if (grid.type) {
                            console.warn(
                                `Unknown grid layout type "${grid.type}"`
                            );
                        } else {
                            console.warn(`Grid type is not defined`);
                        }
                    }
                }
            }
        }
    }
};

export default buildLayout;
