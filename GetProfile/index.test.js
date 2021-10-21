const httpFunction = require('./index');

beforeEach(() => {
    jest.clearAllMocks();
});

test.todo('Should return 200 with profile');
test.todo('Should return 500 when connection to GitHub fails');

test('Article HTTP Trigger should return known text correctly', async () => {
    const context = {
        log: jest.fn(),
        bindingData: {
            slug: 'my-valid-slug'
        }
    }
    const request = {
        query: { name: 'Bill' }
    };

    await httpFunction(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.body).toEqual(`Hello, Bill. This HTTP triggered function executed successfully.`);
});