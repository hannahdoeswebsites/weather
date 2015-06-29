import { moduleForModel, test } from 'ember-qunit';

moduleForModel('weather-shower', 'Unit | Model | weather shower', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
