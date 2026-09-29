'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = { name: 'Denys' };
  let obj2 = { name: 'Misha' };

  obj1.name = 'Danya';
  obj2.name = 'Anya';

  obj1 = { name: 'Jackson' };
  obj2 = { name: 'Mickle' };
};

module.exports = { fn };
