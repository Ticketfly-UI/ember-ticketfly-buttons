/**
  @module ticketfly-buttons
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
  classNames: ['c-button'],
  attributeBindings: ['disabled'],
  classNameBindings: ['buttonCategory'],

  utilityGroups: collect('weightGroup', 'colorGroup'),

  buttonCategory: computed('utilityGroups', {
    get() {
      let buttonCategory = '';
      get(this, 'utilityGroups').map((group) => {
        if (group) {
          buttonCategory += `u-button-${group} `;
        }
      });
      return buttonCategory;
    }
  })
});