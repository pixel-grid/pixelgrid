import adjustUnit from '../../helpers/adjustUnit';

describe('adjustUnit', () => {
    const getComputedStyleMock = jest.spyOn(window, 'getComputedStyle').mockName('getComputedStyle');
    const getPropertyValueMock = jest.fn<string | undefined, [string]>().mockName('getPropertyValue');

    beforeAll(() => {
        getComputedStyleMock.mockImplementation(
            () =>
                ({
                    getPropertyValue: getPropertyValueMock as (propertyName: string) => string | undefined
                } as CSSStyleDeclaration)
        );
    });

    beforeEach(() => {
        getPropertyValueMock.mockImplementation((propertyName: string) => (propertyName === 'font-size' ? '16px' : undefined));
    });

    afterEach(() => {
        getPropertyValueMock.mockRestore();
    });

    afterAll(() => {
        getComputedStyleMock.mockRestore();
    });

    test('returns px while additional params are not defined', () => {
        const value = 25;

        const result = adjustUnit(value);

        expect(getPropertyValueMock).toBeCalledTimes(0);
        expect(result).toBe(`${value}px`);
    });

    test('returns px while additional params are specified', () => {
        const value = 25;

        const result = adjustUnit(value, false);

        expect(getPropertyValueMock).toBeCalledTimes(0);
        expect(result).toBe(`${value}px`);
    });

    test('calculates REMs', () => {
        const value = 320;

        const result = adjustUnit(value, true);

        expect(getPropertyValueMock).toBeCalledTimes(1);
        expect(getPropertyValueMock).toBeCalledWith('font-size');
        expect(result).toBe(`${value / 16}rem`);
    });

    test('calculates REMs with custom root font-size', () => {
        getPropertyValueMock.mockImplementation((propertyName: string) => (propertyName === 'font-size' ? '20px' : undefined));

        const value = 320;

        const result = adjustUnit(value, true);

        expect(getPropertyValueMock).toBeCalledTimes(1);
        expect(getPropertyValueMock).toBeCalledWith('font-size');
        expect(result).toBe(`${value / 20}rem`);
    });

    test('calculates REMs with wrong custom root font-size', () => {
        getPropertyValueMock.mockImplementation((propertyName: string) => (propertyName === 'font-size' ? 'xyz' : undefined));

        const value = 320;

        const result = adjustUnit(value, true);

        expect(getPropertyValueMock).toBeCalledTimes(1);
        expect(getPropertyValueMock).toBeCalledWith('font-size');
        expect(result).toBe(`${value / 16}rem`);
    });

    test('calculates REMs with specified root font-size', () => {
        const value = 320;

        const result = adjustUnit(value, true, 32);

        expect(getPropertyValueMock).toBeCalledTimes(0);
        expect(result).toBe(`${value / 32}rem`);
    });

    test('calculates REMs with wrong specified root font-size', () => {
        getPropertyValueMock.mockImplementation((propertyName: string) => (propertyName === 'font-size' ? '20px' : undefined));

        const value = 320;

        const result = adjustUnit(value, true, -1);

        expect(getPropertyValueMock).toBeCalledTimes(1);
        expect(result).toBe(`${value / 20}rem`);
    });
});
