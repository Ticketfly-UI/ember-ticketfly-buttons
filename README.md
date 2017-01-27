# Ember Ticketfly Buttons

This Ember addon provides the **buttons** and **buttons with icons** components of the Ticketfly UI library.

## TO DO

* tf-button component with svg icons
* Refactor some styles to ticketfly-css

## Usage
```
ember install ember-ticketfly-buttons`
```

`tf-button` component:
* Pass `weightGroup` and `colorGroup` properties to configure the **button categories**.
* Pass `disabled` property to alter the **button state**.

**Button Categories**

Template:
```hbs
{{!-- Inline form --}}
{{tf-button weightGroup='primary' colorGroup='neutral' text="Solid indigo button"}}

{{!-- Block form --}}
{{#tf-button weightGroup='secondary' colorGroup='positive'}}Solid green button{{/tf-button}}
```

Resulting HTML:
```html
<button class="c-tf-button c-tf-button--primary c-tf-button--neutral">Solid indigo button</button>

<button class="c-tf-button c-tf-button--secondary c-tf-button--positive">Solid green button</button>
```

**Button States**

Template:

```hbs
{{!-- Active state is default --}}
{{tf-button text="Active button"}} 

{{#tf-button disabled=true}}Disabled button{{/tf-button}}
```

Resulting HTML:

```html
<button class="c-tf-button">Active button</button> 

<button class="c-tf-button" disabled=true>Disabled button</button>
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-ticketfly-buttons`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
