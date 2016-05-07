# Ember-sha512

## Basic Usage

```
import { hex_sha512 } from 'ember-sha512/utils/sha512';


export default Ember.Controller.extend({

  hex: computed(function () {
    return hex_sha512('abc');
  })
});
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
