let mediaQuery = {
	'--phone-xl': '(min-width: 600px)',
	'--pad': '(min-width: 768px)',
	'--desktop': '(min-width: 1024px)',
	'--desktop-w': '(min-width: 1280px)',
	'--desktop-hd': '(min-width: 1440px)',
    '--desktop-index': '(min-width: 1540px)',
	'--desktop-fullhd': '(min-width: 1920px)'
}

let variables = {
    'main': '#E00442',
    'bkg-lightgrey': '#F3F3F3',
    'bkg-darkgrey':'#E9E9E9',
    'bkg-hover':'#FEFBD3',
    'popup':'rgba(100,100,100,0.6)',

    'nav-font-color': '#555555',
    'text-black': '#323232',
    'text-grey': '#5E5E5E',
    'text-lightgrey': '#656565',
    'text-foreword': '#9B9B9B',
    'tag': '#888888',

    'main-border': '1px solid var(--main)',
    'light-border': '2px solid var(--bkg-lightgrey)',
    'dark-border': '1px solid #C0C0C0',

    'serif': '"Roboto", sans-serif',
    'sans': '"Crimson Text", serif',
}

let postCSSConfig = {
	plugins: {
		'postcss-import': {},
		'postcss-cssnext': {
			features: {
				customMedia: {
					extensions: mediaQuery
				},
                customProperties: {
                    variables: variables
                }
			}
		},
        'lost': {}
	}
}

module.exports = postCSSConfig;


