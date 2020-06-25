'use strict';

const commander = require('commander');
const packageJson = require('./package.json');
const generateNewApp = require('vucv-generate-new');
const program = new commander.Command(packageJson.name);

let projectName;

program.version(packageJson.version)
    .arguments('<directory>')
    .option('--quickstart', 'Quick start app creation')
    .description('create a new appliction')
    .action(directory => {
        projectName = directory
    })
    .parse(process.argv);
    
if(projectName === undefined) {
    console.error('Please specify the <directory> of your project');
    process.exit(1)
}

generateNewApp(projectName, program);