# uuid-version

This is a small package that helps you to recognize the version of a given uuid.

### Install

```bash
npm install uuid-version
```

### Usage

```js
import * as uuid from 'uuid';
import { version } from 'uuid-version';

console.log(version(uuid.v4()) === 4);
```