const httpFunction = require('./index');

// mock context
const context = {
    log: jest.fn(),
    bindingData: {
        slug: 'valid-test-slug'
    }
};

beforeEach(() => {
    jest.clearAllMocks();
})

test('Article HTTP Trigger should return known text correctly', async () => {
    const request = {
        query: { name: 'Bill' }
    };

    await httpFunction(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.body).toEqual(`Hello Bill. Your slug is: ${context.bindingData.slug}`);
});