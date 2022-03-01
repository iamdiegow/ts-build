const path = require('path');

const commonConfig = {
  mode: 'production',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  target: 'node',
};

module.exports = {
  ...commonConfig,
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, 'tsconfig.esm.json'),
            },
          },
        ],
      },
    ],
  },
	output: {
		library: {
			type: 'commonjs-static'
		},
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	}
};
