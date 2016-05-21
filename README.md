# Ember-sha512

The is an Ember-cli addon version of Paul Johnston's sha512.js

http://pajhome.org.uk/crypt/md5/sha512.html

## Basic Usage

```
import sha512 from 'ember-sha512';

let hex = sha512.hex_sha512('abc');

let b64 = sha512.b64_sha512('abc');
```

or using named imports..

```
import { hex_sha512, b64_sha512 } from 'ember-sha512';

let hex = hex_sha512('abc');

let b64 = b64_sha512('abc');
```

## Installation

* `npm install ember-sha512 --save-dev`
