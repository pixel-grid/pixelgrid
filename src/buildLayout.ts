import {
    BuildLayoutOptions,
    IColumnsCenterGrid,
    IColumnsLeftGrid,
    IColumnsRightGrid,
    IColumnsStretchGrid,
    IGrid,
    IPreset,
    IRowsBottomGrid,
    IRowsCenterGrid,
    IRowsStretchGrid,
    IRowsTopGrid
} from './grid.interfaces';

import columnsCenter from './layout/columnsCenter';
import columnsLeft from './layout/columnsLeft';
import columnsRight from './layout/columnsRight';
import columnsStretch from './layout/columnsStretch';
import gridLayout from './layout/grid';
import rowsBottom from './layout/rowsBottom';
import rowsCenter from './layout/rowsCenter';
import rowsStretch from './layout/rowsStretch';
import rowsTop from './layout/rowsTop';

const buildLayout: (root: HTMLElement, presets: IPreset[], options: BuildLayoutOptions) => void = (root, presets, options) => {
    if (root) {
        // Cleanup root element
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }

        // Build grid layouts
        if (presets) {
            for (const preset of presets.filter(
                (p) => p.grids && p.grids.length > 0 && (!p.mediaQuery || window.matchMedia(p.mediaQuery).matches)
            )) {
                for (const grid of preset.grids) {
                    if (grid.type === 'grid') {
                        gridLayout(root, grid as IGrid, options);
                    } else if (grid.type === 'columns-center') {
                        columnsCenter(root, grid as IColumnsCenterGrid, options);
                    } else if (grid.type === 'columns-stretch') {
                        columnsStretch(root, grid as IColumnsStretchGrid, options);
                    } else if (grid.type === 'columns-left') {
                        columnsLeft(root, grid as IColumnsLeftGrid, options);
                    } else if (grid.type === 'columns-right') {
                        columnsRight(root, grid as IColumnsRightGrid, options);
                    } else if (grid.type === 'rows-center') {
                        rowsCenter(root, grid as IRowsCenterGrid, options);
                    } else if (grid.type === 'rows-stretch') {
                        rowsStretch(root, grid as IRowsStretchGrid, options);
                    } else if (grid.type === 'rows-top') {
                        rowsTop(root, grid as IRowsTopGrid, options);
                    } else if (grid.type === 'rows-bottom') {
                        rowsBottom(root, grid as IRowsBottomGrid, options);
                    } else {
                        if (grid.type) {
                            console.warn(`Unknown grid layout type "${grid.type}"`);
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
