import * as tar from 'tar';
import { createGunzip } from 'zlib';
import type { EventEmitter } from 'events';

const TarParser = tar.Parse as any;

interface ReadEntry extends EventEmitter {
  path: string;
  mode: number;
  ignore: boolean;
}

export interface PackageFiles {
  [file: string]: Buffer;
}

export function untar(stream: NodeJS.ReadableStream): Promise<PackageFiles> {
  return new Promise((resolve, reject) => {
    const files: PackageFiles = {};
    stream
      .on('error', reject)
      .pipe(createGunzip())
      .on('error', reject)
      .pipe(new TarParser())
      .on('error', reject)
      .on('entry', (e: ReadEntry) => {
        const content: Array<Buffer> = [];
        const p = e.path;

        e.on('error', reject);
        e.on('data', (c: Buffer) => content.push(c));
        e.on('end', () => (files[p] = Buffer.concat(content)));
      })
      .on('end', () => resolve(files));
  });
}
