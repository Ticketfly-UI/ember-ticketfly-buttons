/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ticketfly-buttons',

  included: function(app) {

    app.import('app/styles/ember-ticketfly-buttons.css');

    this._super.included.call(this, app);

  }
};
