import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/scripts/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const output = {
  filename: 'bundle.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
};

export const plugins = [
  new HtmlWebpackPlugin({
    template: './src/layout/index.html',
    filename: 'index.html',
    scriptLoading: 'defer',
  }),
];

export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ],
};
