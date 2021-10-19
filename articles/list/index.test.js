const httpFunction = require('./index');

// mock context
const context = {
    log: jest.fn()
};

beforeEach(() => {
    jest.clearAllMocks();
})

test('Http trigger should return known text', async () => {

    const request = {
        query: { name: 'Bill' }
    };

    await httpFunction(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.body).toEqual('Hello Bill');
});

test('Article HTTP Trigger should return known text correctly', async () => {
    const request = {
        query: { name: 'Bill' }
    };

    await httpFunction(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.body).toEqual('Hello Bill');
});