/**
  @module ember-ticketfly-buttons
 */
import Ember from 'ember';
import layout from './template';
import { collect } from 'ember-computed';
const { Component, computed, get } = Ember;

/**
  @public
  @class TfButton
  @extends Ember.Component
 */
export default Component.extend({
  layout,

  tagName: 'button',
  classNames: ['tf-button'],
  attributeBindings: ['disabled', 'aria-label'],
  classNameBindings: ['buttonCategory'],

  utilityGroups: collect('weightGroup', 'colorGroup'),

  buttonCategory: computed('utilityGroups', {
    get() {
      return get(this, 'utilityGroups')
        .compact()
        .map(group => `tf-button--${group}`)
        .join(' ');
    }
  })
});
