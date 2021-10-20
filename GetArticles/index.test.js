const httpFunction = require('./index');

beforeEach(() => {
    jest.clearAllMocks();
});

test.todo('Should return 200 and article with matching slug');
test.todo('Should return 200 with profile with slug provided is \'about\'');
test.todo('Should return 404 and no content when no article with slug exists');
test.todo('Should return 200 and list of most recent 20 articles if no slug is provided');



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
    expect(context.res.body).toEqual(`Hello Bill. Your slug is: ${context.bindingData.slug}`);
});