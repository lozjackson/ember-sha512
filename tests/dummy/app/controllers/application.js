import Ember from 'ember';
import { hex_sha512, b64_sha512 } from 'ember-sha512/utils/sha512';

const computed = Ember.computed;

export default Ember.Controller.extend({
  str: 'abc',

  hex: computed('str', function () {
    let str = this.get('str');
    return hex_sha512(str);
  }),

  b64: computed('str', function () {
    let str = this.get('str');
    return b64_sha512(str);
  })

});
