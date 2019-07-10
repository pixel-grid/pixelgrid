/**
 * Create empty div element and append it to the end of the body
 * @param id Element's identifier
 */
const buildRootElement: (id: string) => HTMLElement = (id) => {
    const result = document.createElement('div');

    result.id = id;
    result.style.position = 'absolute';
    result.style.top = '0';
    result.style.left = '0';
    result.style.right = '0';
    result.style.pointerEvents = 'none';
    result.style.overflow = 'hidden';

    document.body.appendChild(result);

    return result;
};

export default buildRootElement;
