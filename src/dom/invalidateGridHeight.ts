import getDocumentHeight from '../helpers/getDocumentHeight';

/**
 * Invalidate grid element height
 * @param element Grid's root element
 */
const invalidateGridHeight: (element: HTMLElement) => HTMLElement = (
    element: HTMLElement
) => {
    // Hide grid before measuring document height
    element.style.display = 'none';

    // Measure document height
    const height = getDocumentHeight();

    // Update Grid's height and show
    element.style.height = `${height}px`;
    element.style.display = 'block';

    return element;
};

export default invalidateGridHeight;
