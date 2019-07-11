/**
 * Preset that defines grids to be displayed for specific media query
 */
export interface IPreset {
    /**
     * Grids that should be displayed for the preset
     */
    grids: IGridBase[];

    /**
     * Media query that should be matched to display the grid.
     * Keep the value empty to display the grid for all media.
     */
    mediaQuery?: string;
}

/**
 * Base interface for all kinds of grid
 */
export interface IGridBase {
    /**
     * Grid type identifier
     */
    type:
        | 'grid'
        | 'columns-stretch'
        | 'columns-center'
        | 'columns-left'
        | 'rows-stretch'
        | 'rows-center'
        | 'rows-top';

    /**
     * Color of grid line
     */
    color: string;

    /**
     * Opacity of grid line (0 - 0%, 0.5 - 50%, 1 - 100%, etc)
     */
    opacity?: number;
}

/**
 * Vertical/horizontal grid with fixed step size
 */
export interface IGrid extends IGridBase {
    /**
     * Step size in pixels
     */
    size: number;
}

/**
 * Columns based grid
 */
export interface IColumnsGrid extends IGridBase {
    /**
     * Count of columns in grid
     */
    count?: number;

    /**
     * Gutter size in pixels
     */
    gutter: number;
}

/**
 * Stretched columns grid
 */
export interface IColumnsStretchGrid extends IColumnsGrid {
    /**
     * Margin in pixels from left/right
     */
    margin: number;
}

/**
 * Centered columns grid
 */
export interface IColumnsCenterGrid extends IColumnsGrid {
    /**
     * Width of column in pixels
     */
    width: number;
}

/**
 * Left oriented columns grid
 */
export interface IColumnsLeftGrid extends IColumnsGrid {
    /**
     * Width of column in pixels
     */
    width: number;

    /**
     * Offset from left in pixles
     */
    offset: number;
}

/**
 * Rows based grid
 */
export interface IRowsGrid extends IGridBase {
    /**
     * Count of rows in grid
     */
    count?: number;

    /**
     * Gutter size in pixels
     */
    gutter: number;
}

/**
 * Stretched rows grid
 */
export interface IRowsStretchGrid extends IRowsGrid {
    /**
     * Margin in pixels from top/bottom
     */
    margin: number;
}

/**
 * Centered rows grid
 */
export interface IRowsCenterGrid extends IRowsGrid {
    /**
     * Height of row in pixels
     */
    height: number;
}

/**
 * Left oriented rows grid
 */
export interface IRowsTopGrid extends IRowsGrid {
    /**
     * Height of row in pixels
     */
    height: number;

    /**
     * Offset from top in pixels
     */
    offset: number;
}
