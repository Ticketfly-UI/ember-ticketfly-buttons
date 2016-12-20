import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-button', 'Integration | Component | tf-button', {
  integration: true
});

test('renders tf-button', function(assert) {
  this.render(hbs`
    {{tf-button text="Click Me"}}
  `);
  assert.ok(this.$('button:contains(Click Me)').length, 'Button is invoked inline');
  this.render(hbs`
    {{#tf-button}}Click You{{/tf-button}}
  `);
  assert.ok(this.$('button:contains(Click You)').length, 'Button is invoked in block form');
});

test('binds disabled attribute to button\'s inactive state', function(assert) {
  this.render(hbs`
    {{#tf-button disabled=disabled}}Can't Click{{/tf-button}}
  `);
  assert.ok(!this.$('button').is(':disabled'), 'Button is not disabled');
  this.set('disabled', true);
  assert.ok(this.$('button').is(':disabled'), 'Button is disabled');
});

test('applies button category classes', function(assert) {
  this.render(hbs`
    {{#tf-button weightGroup='primary' colorGroup='positive'}}Primary Positive{{/tf-button}}
  `);
  assert.ok(this.$('button.u-button-primary.u-button-positive').length, 'Button is rendered with primary and positive classes');
});