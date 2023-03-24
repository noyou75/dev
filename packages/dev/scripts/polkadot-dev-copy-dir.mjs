#!/usr/bin/env node
// Copyright 2017-2023 @polkadot/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0

// @ts-check

import { copyDirSync, exitFatal } from './util.mjs';

const args = process.argv.slice(2);
const sources = args.slice(0, args.length - 1);
const dest = args[args.length - 1];

console.log('$ polkadot-dev-copy-dir', args.join(' '));

if (!sources || !dest) {
  exitFatal('Expected at least one <source>... and one <destination> argument');
}

sources.forEach((src) => copyDirSync(src, dest));
