import type { ConfigArray } from 'typescript-eslint';
import type { ParserOptions } from '@typescript-eslint/parser';

const config: (options: Pick<ParserOptions, 'tsconfigRootDir' | 'project'>) => ConfigArray;

export default config;
