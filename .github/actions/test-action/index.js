// .github/action/test-action/index.js

const core = require('actions/core');

try {
  const exampleInput = core.getInput('example-input');
  console.log(`Action received input: ${exampleInput}`);
} catch (error) {
  core.setFailed(error.message);
}
