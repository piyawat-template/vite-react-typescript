module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-scss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'prettier/prettier': [true, { singleQuote: true, tabWidth: 2 }],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
          'import',
          'screen',
          'mixin',
          'include',
        ],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['ion-icon'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['layer', 'screen'],
      },
    ],
    'length-zero-no-unit': null,
  },
}
