import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import uglify from 'rollup-plugin-uglify'

export default [
	{
		input: 'src/index.js',
		output: {
			file: pkg.main,
			format: 'umd',
			name: 'reactOpiumSelect',
			globals: {
				react: 'React'
			}
		},
		external: ['react'],
		plugins: [
			babel({
				ignore: /node_modules/,
				plugins: ['transform-object-rest-spread'],
				presets: [
					[
						'env',
						{
							modules: false
						},
					],
					'react'
				]
			}),
			uglify()
		]
	},
	{
		input: 'src/index.js',
		output: {
			file: pkg.module,
			format: 'es'
		},
		external: ['react'],
		plugins: [
			babel({
				ignore: /node_modules/,
				plugins: ['transform-object-rest-spread'],
				presets: [
					[
						'env',
						{
							modules: false
						},
					],
					'react'
				]
			})
		]
	}
]