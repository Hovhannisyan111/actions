const core = require('@actions/core');
const exec = require('child_process').exec;

try {
  const command = core.getInput('command'); // Get the input command
  exec(command, (error, stdout, stderr) => {
    if (error) {
      core.setFailed(`Command failed: ${error.message}`);
      return;
    }
    core.setOutput('result', stdout || stderr); // Set the output
  });
} catch (error) {
  core.setFailed(error.message);
}

