import { IColumnsCenterGrid, IColumnsStretchGrid, IGrid, IPreset, IRowsTopGrid } from '.';

const commonPreset: IPreset = {
    grids: [
        {
            type: 'grid',
            color: '#78909C',
            opacity: 0.2,
            size: 8
        } as IGrid,

        {
            type: 'rows-top',
            color: '#78909C',
            opacity: 0.2,
            gutter: 8,
            height: 8,
            offset: 8
        } as IRowsTopGrid
    ]
};

const xlgPreset = {
    grids: [
        {
            type: 'columns-center',
            color: '#AAA',
            opacity: 0.25,
            count: 12,
            gutter: 32,
            width: 92
        } as IColumnsCenterGrid
    ],
    mediaQuery: '(min-width: 120em)'
};

const lgPreset = {
    grids: [
        {
            type: 'columns-center',
            color: '#AAA',
            opacity: 0.25,
            count: 12,
            gutter: 32,
            width: 82
        } as IColumnsCenterGrid
    ],
    mediaQuery: '(min-width: 89em) and (max-width: 119.99em)'
};

const mdPreset = {
    grids: [
        {
            type: 'columns-stretch',
            color: '#AAA',
            opacity: 0.25,
            count: 12,
            gutter: 16,
            margin: 16
        } as IColumnsStretchGrid
    ],
    mediaQuery: '(min-width: 84em) and (max-width: 88.99em)'
};

const smPreset = {
    grids: [
        {
            type: 'columns-stretch',
            color: '#AAA',
            opacity: 0.25,
            count: 12,
            gutter: 8,
            margin: 16
        } as IColumnsStretchGrid
    ],
    mediaQuery: '(min-width: 40em) and (max-width: 83.99em)'
};

const xsPreset = {
    grids: [
        {
            type: 'columns-stretch',
            color: '#AAA',
            opacity: 0.25,
            count: 12,
            gutter: 8,
            margin: 16
        } as IColumnsStretchGrid
    ],
    mediaQuery: '(min-width: 30em) and (max-width: 39.99em)'
};

const xxsPreset = {
    grids: [
        {
            type: 'columns-stretch',
            color: '#AAA',
            opacity: 0.25,
            count: 12,
            gutter: 8,
            margin: 8
        } as IColumnsStretchGrid
    ],
    mediaQuery: '(max-width: 29.99em)'
};

export default [commonPreset, xlgPreset, lgPreset, mdPreset, smPreset, xsPreset, xxsPreset];
