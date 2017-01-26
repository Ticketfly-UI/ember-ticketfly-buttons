/**
  @module ember-ticketfly-buttons
 */
import Ember from 'ember';
import layout from './template';
import { collect } from 'ember-computed';
const { Component, computed, get } = Ember;

/**
  weightGroup options: 'primary', 'secondary'
  coorGroup options: 'neutral', 'positive', 'negative'

  @public
  @class TfButton
  @extends Ember.Component
 */
export default Component.extend({
  layout,

  tagName: 'button',
  classNames: ['c-tf-button'],
  attributeBindings: ['disabled', 'aria-label'],
  classNameBindings: ['buttonCategory'],

  colorGroup: 'neutral',
  weightGroup: 'primary',

  utilityGroups: collect('weightGroup', 'colorGroup'),

  buttonCategory: computed('utilityGroups', {
    get() {
      return get(this, 'utilityGroups')
        .compact()
        .map(group => `c-tf-button--${group}`)
        .join(' ');
    }
  })
});
