import buildRootElement from '../../dom/buildRootElement';

describe('buildRootElement', () => {
    test('builds empty root element', () => {
        const result = buildRootElement('pixelgrid', {});
        expect(result).toMatchSnapshot();
    });

    test('builds root element with custom zIndex', () => {
        const result = buildRootElement('pixelgrid', { zIndex: 123456 });
        expect(result).toMatchSnapshot();
    });
});
