export default {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  printWidth: 120,
  trailingCommas: 'all',
  tabWidth: 2,
  importOrder: ['react', '<THIRD_PARTY_MODULES>', '^(\\.|\\.\\.)/(.(?!.(css|scss)))*$', '\\.(css|scss)$'],
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
