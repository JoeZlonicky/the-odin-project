import { merge } from 'webpack-merge';
import * as common from './webpack.common.js';

export default merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
    watchFiles: ['./src/layout/index.html'],
  },
});
