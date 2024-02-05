# dir-control
dir-control, is a versatile utility package designed to simplify directory management tasks in your Node.js projects. It provides convenient functions for handling directories, loading files, and managing script modules effortlessly.

## Install Package
```bash
npm install dir-control
```

## Features
> Directory Listing: Easily list all files in a directory.
> File Loading: Load the content of a specific file from a directory or all files in a directory.
> Module Management: Dynamically load and manage and delete script modules.

## Example
**Your Project Root**
```markdown
- YourProjectRoot
  - src
    - commands
      - ping.js
      - info.js
  - files
    - log.js
  - node_modules
    - dir-control
  - index.js
```
# loadNewFile

```javascript
//index.js
const { loadNewFile } = require('dir-control');
loadNewFile(__dirname, './files', 'log');// ./files/log.js
loadNewFile(__dirname, './src/commands', 'ping');// ./src/commands/ping.js
```
```javascript
//log.js
const { loadNewFile } = require('dir-control');
loadNewFile(__dirname, ':', 'index');// ../index.js
loadNewFile(__dirname, `../src/commands`, `ping`);// ../src/commands/ping.js
```
```javascript
//ping.js
const { loadNewFile } = require('dir-control');
loadNewFile(__dirname, ':', 'index');// ../../index.js
loadNewFile(__dirname, '../../files', 'log');// ../../files/log.js
```

# loadFiles

```javascript
const { loadFiles } = require('dir-control');
loadFiles(__dirname, './src/commands');// node . ./src/commands all files in the directory

```


# deleteFile

```javascript
//index.js
const { deleteFile } = require('dir-control');
deleteFile(`./files/log.js`);// the file will be delet
// To delete file with backup (true):
deleteFile('./files/log.js');//deleteFile(filepath)
// To delete file without backup (false):
deleteFile('example.txt', false);//deleteFile(filepath)

```

# viewFile

```javascript
//index.js
const { viewFile } = require('dir-control');
const logScript = viewFile(__dirname, `./files`, `log`);// ./files/log.js
const pingScript = viewFile(__dirname, `./src/commands`, `ping`);// ./src/commands/ping.js
console.log(`./files/log.js:\n${logScript}`); 
console.log(` ./src/commands/ping.js:\n${pingScript}`);
```

# checkFiles

```javascript
//index.js
const { checkFiles } = require('dir-control');
const files = checkFiles(__dirname, `./files`);// ./files
console.log(`./files/\n${files}`);

```


> **Copyright (c) 2024 sekkena & Sekkena2#5709**


> Special Thanks For vampire_itachi & ItaChi#7489

