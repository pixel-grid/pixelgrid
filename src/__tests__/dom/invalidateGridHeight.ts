const getDocumentHeightMock = jest.fn();
jest.mock('../../helpers/getDocumentHeight', () => ({
    __esModule: true,
    default: getDocumentHeightMock
}));

import invalidateGridHeight from '../../dom/invalidateGridHeight';

describe('invalidateGridHeight', () => {
    beforeEach(() => jest.resetModules());
    afterEach(() => {
        getDocumentHeightMock.mockRestore();
    });

    test('returns correct element', () => {
        const sourceElement = document.createElement('div');

        const result = invalidateGridHeight(sourceElement);

        expect(getDocumentHeightMock).toBeCalledTimes(1);
        expect(result).toEqual(sourceElement);
    });

    test(`invalidates element's height`, () => {
        getDocumentHeightMock.mockReturnValue(500);

        const sourceElement = document.createElement('div');

        invalidateGridHeight(sourceElement);

        expect(getDocumentHeightMock).toBeCalledTimes(1);
        expect(sourceElement).toMatchSnapshot();
    });

    test(`invalidates element's height for grid larger than document`, () => {
        getDocumentHeightMock.mockReturnValue(500);

        const sourceElement = document.createElement('div');
        sourceElement.style.height = '100000px';

        invalidateGridHeight(sourceElement);

        expect(getDocumentHeightMock).toBeCalledTimes(1);
        expect(sourceElement).toMatchSnapshot();
    });
});
