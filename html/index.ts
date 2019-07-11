import {
    IColumnsCenterGrid,
    IColumnsGrid,
    IColumnsLeftGrid,
    IColumnsStretchGrid,
    IGrid,
    IGridBase,
    IPreset,
    IRowsCenterGrid,
    IRowsGrid,
    IRowsStretchGrid,
    IRowsTopGrid,
    destroyGrid,
    initializeGrid
} from '../src/index';

const defaultPreset: IPreset = {
    grids: [
        {
            type: 'grid',
            color: '#000000',
            opacity: 0.2,
            size: 8
        } as IGrid,

        {
            type: 'rows-top',
            color: '#aaaaaa',
            opacity: 0.4,
            gutter: 8,
            height: 8,
            offset: 8
        } as IRowsTopGrid
    ]
};

const xlg1920Preset = {
    grids: [
        {
            type: 'columns-center',
            color: '#aaaaaa',
            opacity: 0.3,
            count: 12,
            gutter: 32,
            width: 92
        } as IColumnsCenterGrid
    ],
    mediaQuery: '(min-width: 95rem)'
};

const lg1440Preset = {
    grids: [
        {
            type: 'columns-stretch',
            color: '#aaaaaa',
            opacity: 0.3,
            count: 12,
            gutter: 32,
            margin: 32
        } as IColumnsStretchGrid
    ],
    mediaQuery: '(min-width: 84rem) and (max-width: 94.99rem)'
};

const md1344Preset = {
    grids: [
        {
            type: 'columns-stretch',
            color: '#aaaaaa',
            opacity: 0.3,
            count: 12,
            gutter: 16,
            margin: 16
        } as IColumnsStretchGrid
    ],
    mediaQuery: '(min-width: 40rem) and (max-width: 83.99rem)'
};

const sm640Preset = {
    grids: [
        {
            type: 'columns-stretch',
            color: '#aaaaaa',
            opacity: 0.3,
            count: 12,
            gutter: 8,
            margin: 16
        } as IColumnsStretchGrid
    ],
    mediaQuery: '(min-width: 20rem) and (max-width: 39.99rem)'
};

const xs320Preset = {
    grids: [
        {
            type: 'columns-stretch',
            color: '#aaaaaa',
            opacity: 0.3,
            count: 12,
            gutter: 8,
            margin: 8
        } as IColumnsStretchGrid
    ],
    mediaQuery: '(max-width: 19.99rem)'
};

const token = initializeGrid(
    defaultPreset,
    xlg1920Preset,
    lg1440Preset,
    md1344Preset,
    sm640Preset,
    xs320Preset
);

const removegridButton = document.getElementById('removegrid');
if (removegridButton) {
    removegridButton.addEventListener('click', () => destroyGrid(token));
}
