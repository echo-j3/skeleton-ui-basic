import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #d9ba42
		'--color-primary-50': '249 245 227', // #f9f5e3
		'--color-primary-100': '247 241 217', // #f7f1d9
		'--color-primary-200': '246 238 208', // #f6eed0
		'--color-primary-300': '240 227 179', // #f0e3b3
		'--color-primary-400': '228 207 123', // #e4cf7b
		'--color-primary-500': '217 186 66', // #d9ba42
		'--color-primary-600': '195 167 59', // #c3a73b
		'--color-primary-700': '163 140 50', // #a38c32
		'--color-primary-800': '130 112 40', // #827028
		'--color-primary-900': '106 91 32', // #6a5b20
		// secondary | #07c4c6
		'--color-secondary-50': '218 246 246', // #daf6f6
		'--color-secondary-100': '205 243 244', // #cdf3f4
		'--color-secondary-200': '193 240 241', // #c1f0f1
		'--color-secondary-300': '156 231 232', // #9ce7e8
		'--color-secondary-400': '81 214 215', // #51d6d7
		'--color-secondary-500': '7 196 198', // #07c4c6
		'--color-secondary-600': '6 176 178', // #06b0b2
		'--color-secondary-700': '5 147 149', // #059395
		'--color-secondary-800': '4 118 119', // #047677
		'--color-secondary-900': '3 96 97', // #036061
		// tertiary | #c83ef0
		'--color-tertiary-50': '247 226 253', // #f7e2fd
		'--color-tertiary-100': '244 216 252', // #f4d8fc
		'--color-tertiary-200': '241 207 251', // #f1cffb
		'--color-tertiary-300': '233 178 249', // #e9b2f9
		'--color-tertiary-400': '217 120 245', // #d978f5
		'--color-tertiary-500': '200 62 240', // #c83ef0
		'--color-tertiary-600': '180 56 216', // #b438d8
		'--color-tertiary-700': '150 47 180', // #962fb4
		'--color-tertiary-800': '120 37 144', // #782590
		'--color-tertiary-900': '98 30 118', // #621e76
		// success | #fff30e
		'--color-success-50': '255 253 219', // #fffddb
		'--color-success-100': '255 253 207', // #fffdcf
		'--color-success-200': '255 252 195', // #fffcc3
		'--color-success-300': '255 250 159', // #fffa9f
		'--color-success-400': '255 247 86', // #fff756
		'--color-success-500': '255 243 14', // #fff30e
		'--color-success-600': '230 219 13', // #e6db0d
		'--color-success-700': '191 182 11', // #bfb60b
		'--color-success-800': '153 146 8', // #999208
		'--color-success-900': '125 119 7', // #7d7707
		// warning | #7cf758
		'--color-warning-50': '235 254 230', // #ebfee6
		'--color-warning-100': '229 253 222', // #e5fdde
		'--color-warning-200': '222 253 213', // #defdd5
		'--color-warning-300': '203 252 188', // #cbfcbc
		'--color-warning-400': '163 249 138', // #a3f98a
		'--color-warning-500': '124 247 88', // #7cf758
		'--color-warning-600': '112 222 79', // #70de4f
		'--color-warning-700': '93 185 66', // #5db942
		'--color-warning-800': '74 148 53', // #4a9435
		'--color-warning-900': '61 121 43', // #3d792b
		// error | #9340a1
		'--color-error-50': '239 226 241', // #efe2f1
		'--color-error-100': '233 217 236', // #e9d9ec
		'--color-error-200': '228 207 232', // #e4cfe8
		'--color-error-300': '212 179 217', // #d4b3d9
		'--color-error-400': '179 121 189', // #b379bd
		'--color-error-500': '147 64 161', // #9340a1
		'--color-error-600': '132 58 145', // #843a91
		'--color-error-700': '110 48 121', // #6e3079
		'--color-error-800': '88 38 97', // #582661
		'--color-error-900': '72 31 79', // #481f4f
		// surface | #5e228d
		'--color-surface-50': '231 222 238', // #e7deee
		'--color-surface-100': '223 211 232', // #dfd3e8
		'--color-surface-200': '215 200 227', // #d7c8e3
		'--color-surface-300': '191 167 209', // #bfa7d1
		'--color-surface-400': '142 100 175', // #8e64af
		'--color-surface-500': '94 34 141', // #5e228d
		'--color-surface-600': '85 31 127', // #551f7f
		'--color-surface-700': '71 26 106', // #471a6a
		'--color-surface-800': '56 20 85', // #381455
		'--color-surface-900': '46 17 69' // #2e1145
	}
};
