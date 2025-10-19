const fs = require('fs');
const path = require('path');

const mainPackageJsonPath = path.resolve(__dirname, '../package.json');
const childPackageJsonPath = path.resolve(__dirname, '../projects/ng-mat-plus/package.json');

const mainPackageJson = require(mainPackageJsonPath);
const childPackageJson = require(childPackageJsonPath);

// Update child project's version
childPackageJson.version = mainPackageJson.version;

// Write the updated version back to the child package.json
fs.writeFileSync(childPackageJsonPath, JSON.stringify(childPackageJson, null, 2));