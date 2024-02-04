// load-file.ts

declare module "dir-manager" {
  interface Config {
    dirname: string;
    directory: string;
    fileName: string;
  }
  interface tsConfig {
    dirname: string;
    directory: string;
  }

  export function loadNewFile(config: Config): string;
  export function loadFiles(config: tsConfig): string;
  export function checkFiles(config: tsConfig): string;
  export function viewFile(config: Config): string;
}
