import {
    IColumnsCenterGrid,
    IColumnsGrid,
    IColumnsLeftGrid,
    IColumnsRightGrid,
    IColumnsStretchGrid,
    IGrid,
    IGridBase,
    IPreset,
    IRowsBottomGrid,
    IRowsCenterGrid,
    IRowsGrid,
    IRowsStretchGrid,
    IRowsTopGrid,
    defaultPreset,
    destroyGrid,
    initializeGrid
} from '../src/index';

const items = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta, est ac tempor auctor, velit sem interdum quam, sit amet dictum purus est sed nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce at ullamcorper urna. Nam imperdiet nunc at diam placerat, eget malesuada nisi commodo. Donec suscipit ut dui eu finibus. Aliquam erat volutpat. Vestibulum nec nibh vel felis fermentum ultrices. Mauris vel mauris ac diam congue facilisis auctor quis nisi. In hac habitasse platea dictumst. Curabitur semper tortor ut sollicitudin hendrerit. Quisque vel posuere ex, a vehicula mauris. Fusce risus urna, hendrerit at consequat ac, accumsan eget dui. Nulla vulputate mattis tellus lobortis euismod. Maecenas enim arcu, lacinia non pellentesque sed, tristique eget risus. Maecenas porttitor viverra iaculis. Donec aliquet felis velit, commodo luctus velit venenatis quis.',
    'Suspendisse non congue lectus. Donec est enim, pulvinar sed neque ut, fringilla bibendum justo. Nulla tristique, orci at ultricies tempus, mauris tellus efficitur massa, vel vestibulum odio dui eget odio. Quisque ullamcorper ut quam id consequat. Maecenas interdum augue ligula, vitae finibus nibh volutpat et. Integer ex risus, pharetra vel turpis non, bibendum congue urna. Sed maximus egestas mollis. Duis ornare est non mi mollis, ut vehicula quam tempor. Maecenas aliquam id dui et ultrices. Nullam sed malesuada elit.',
    'Ut gravida arcu in egestas mattis. Nam hendrerit eleifend ipsum sit amet viverra. Vivamus pharetra tincidunt nisl, sit amet tincidunt leo finibus et. Integer a pharetra nisl, ut molestie sem. Maecenas vitae sollicitudin arcu. Praesent enim lacus, aliquam et tincidunt sit amet, interdum et nisl. Praesent sed urna laoreet orci venenatis pellentesque.',
    'Integer sit amet ex sit amet libero rhoncus blandit. Nunc ut neque luctus, sollicitudin mauris sit amet, auctor tellus. Aenean pulvinar elit sed lobortis laoreet. Donec dapibus a sapien nec dapibus. Pellentesque nec luctus lorem. Donec varius vestibulum ipsum, et condimentum mauris lacinia quis. Integer at euismod lacus. Integer ut viverra est, et venenatis erat. Maecenas semper non elit sit amet mollis. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Praesent ex orci, condimentum eget ligula eget, imperdiet iaculis tellus. Quisque volutpat venenatis elit, sit amet posuere libero euismod eu.',
    'Suspendisse potenti. Sed faucibus dolor ac consequat viverra. Ut efficitur in leo vel maximus. Duis faucibus pretium lacus, a dictum magna facilisis ut. Duis faucibus, arcu non dapibus consequat, arcu risus vestibulum magna, varius rhoncus velit velit vitae velit. Fusce a ex eget ante venenatis cursus. Ut lacinia nunc a placerat laoreet. Nulla sagittis non nunc vel porta. In rhoncus finibus rutrum. Vestibulum in sem non turpis tempus semper quis non ante. Donec libero enim, sollicitudin tempor orci vel, bibendum convallis odio. Ut tincidunt ante a tortor lobortis, in laoreet justo sagittis.'
];

Array.from({ length: 20 }).forEach(() => {
    items.forEach((item) => {
        const element = document.createElement('p');
        element.innerText = item;
        document.body.appendChild(element);
    });
});

const token = initializeGrid(defaultPreset, { useRem: true });

const removegridButton = document.createElement('button');
removegridButton.innerText = 'Remove grid';
removegridButton.addEventListener('click', () => destroyGrid(token));
document.body.appendChild(removegridButton);
