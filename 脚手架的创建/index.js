#! /usr/bin/env node

let program = require("commander");
let helpOption = require("./lib/core/helpOptions");
let command = require("./lib/core/command");

// 查看版本号
program.version(require("./package.json").version);

// 命令帮助添加
helpOption();

// 添加项目描述project descripe
command();


program.parse(process.argv);