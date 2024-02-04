// index.js
const path = require('node:path');
const fs = require('node:fs');
const redColor = "\x1b[31m";
const resetColor = "\x1b[0m";
function loadNewFile(dirname, directory, fileName) {
   const newFilePath = path.join(dirname, directory, `${fileName}.js`);
   //console.log(`${redColor}${newFilePath}${resetColor}`);
   try {
      // delete require.cache[require.resolve(newFilePath)];
      const loadedModule = require(newFilePath);
      return loadedModule;
   } catch (error) {
      console.error(`${redColor}Error loading ${fileName}:${resetColor}`, `${redColor}${error}${resetColor}`);
      return null;
   }
}

function loadFiles(dirname, directory) {
   const fileNames = fs.readdirSync(directory);
   let loadedModules = [];
   fileNames.forEach(fileName => {
      if (path.extname(fileName) === '.js') {
         const newFilePath = path.join(dirname, directory, fileName);
         //  console.log(`${redColor}${newFilePath}${resetColor}`);      
         try {
            const loadedModule = require(newFilePath);
            loadedModules.push(loadedModule);
         } catch (error) {
            console.error(`${redColor}Error loading ${fileName}:${resetColor}`, `${redColor}${error}${resetColor}`);
         }
      }
   });

   return loadedModules;
}

// function fileDelete(filePath) {
//    fs.unlinkSync(filePath);
//    console.log(`${redColor}${filePath}${resetColor} has been deleted successfully!`);
// }
// function deleteFile(filePath) {
//   try {
//     fs.unlinkSync(filePath);
//     console.log(`${redColor}${filePath}${resetColor} has been deleted successfully!`);
//   } catch (err) {
//     console.error(`${redColor}Error deleting ${filePath}: ${err} ${resetColor}`); 
//    }
// }

function deleteFile(filePath, shouldBackup = true) {
   try {
     if (shouldBackup) {
       backupFile(filePath);
     }
     fs.unlinkSync(filePath);
     console.log(`${redColor}${filePath}${resetColor} has been deleted successfully!`);
   } catch (err) {
     console.error(`${redColor}Error deleting ${filePath}: ${err} ${resetColor}`);
   }
 }
 
 function backupFile(filePath) {
   try {
     const fileContent = fs.readFileSync(filePath, 'utf8');
     const backupPath = 'delFileLog.backup';
    if (!fs.existsSync(backupPath)) {
    fs.writeFileSync(backupPath, '');
     }
     fs.appendFileSync(backupPath, `${filePath}:\n${fileContent}\n\n`, 'utf8');
     console.log(`${redColor}Backup created at: ${backupPath}${resetColor}`);
   } catch (err) {
     console.error(`${redColor}Error creating backup for ${filePath}: ${err} ${resetColor}`);
   }
 }
 
function checkFiles(dirname, directory, fileName) {
   const dirPath = path.join(dirname, directory);
   const files = fs.readdirSync(dirPath);
   if (!fileName) {
      //  console.log(files.join('\n'));
   } else {
      const fileExists = files.includes(`${fileName}.js`);
      if (fileExists) {
         //  console.log(`${redColor}File exists: ${fileName}${resetColor}`);
      } else {
         console.log(`${redColor}File not found: ${fileName}${resetColor}`);
      }
   }
}
function viewFile(dirname, directory, fileName) {
   const filePath = path.join(dirname, directory, `${fileName}.js`);
   try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      //  console.log(fileContent);
   } catch (error) {
      console.error(`${redColor}Error reading file ${fileName}:${resetColor}`, `${redColor}${error}${resetColor}`);
   }
}

module.exports = { loadNewFile, loadFiles, backupFile, deleteFile, checkFiles, viewFile };
///Dev By @sekkena , sekkena2#5709

