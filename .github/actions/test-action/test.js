const core = require('@actions/core');
const run = require('./index');

jest.mock('@actions/core');

describe('My Action', () => {
  it('sets the correct greeting output', async () => {
    core.getInput = jest.fn().mockReturnValue('Edgar');
    core.setOutput = jest.fn();

    await run();

    expect(core.setOutput).toHaveBeenCalledWith('greeting', 'Hello, Edgar! 👋');
  });
});

