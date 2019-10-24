import { BuildLayoutOptions } from '../grid.interfaces';

/**
 * Create empty div element and append it to the end of the body
 * @param id Element's identifier
 */
const buildRootElement: (id: string, options: BuildLayoutOptions) => HTMLElement = (id, options) => {
    const result = document.createElement('div');

    result.id = id;
    result.style.position = 'absolute';
    result.style.top = '0';
    result.style.left = '0';
    result.style.right = '0';
    result.style.pointerEvents = 'none';
    result.style.overflow = 'hidden';

    if (options.zIndex !== undefined) {
        result.style.zIndex = `${options.zIndex}`;
    }

    document.body.appendChild(result);

    return result;
};

export default buildRootElement;
