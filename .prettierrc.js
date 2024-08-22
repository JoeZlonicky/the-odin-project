export default {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-css-order',
    'prettier-plugin-ejs',
    'prettier-plugin-prisma',
  ],
  singleQuote: true,
  printWidth: 120,
  trailingCommas: 'all',
  tabWidth: 2,
  importOrder: ['react', '<THIRD_PARTY_MODULES>', '^(\\.|\\.\\.)/(.(?!.(css|scss)))*$', '\\.(css|scss)$'],
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
