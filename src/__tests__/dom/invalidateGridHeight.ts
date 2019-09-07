jest.mock('../../helpers/getDocumentHeight', () => ({
    __esModule: true,
    default: () => 500
}));

import invalidateGridHeight from '../../dom/invalidateGridHeight';

describe('invalidateGridHeight', () => {
    test('returns correct element', () => {
        const sourceElement = document.createElement('div');

        const result = invalidateGridHeight(sourceElement);

        expect(result).toEqual(sourceElement);
    });

    test("invalidates element's height", () => {
        const sourceElement = document.createElement('div');

        invalidateGridHeight(sourceElement);

        expect(sourceElement).toMatchSnapshot();
    });

    test("invalidates element's height for grid larger than document", () => {
        const sourceElement = document.createElement('div');
        sourceElement.style.height = '100000px';

        invalidateGridHeight(sourceElement);

        expect(sourceElement).toMatchSnapshot();
    });
});
