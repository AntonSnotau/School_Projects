module.export	=	{
		entry:	"./app.js",
		output:	{
				filename:	"out.js"
		},
    watch: true,
		module:	{
			loaders:	[
			{
					test:	/\.js$/,
					exclude:	/node_modules/,
					loade:	'babel',
					query:	{preset:	[es2015]}
			},{
					test:	/\.css$/,
					loader:	['style-loader',	'css=loader']
			},{
	      	test:	/\.scss$/,
		      loader:	['style-loader',	'css-loader',
				  'sass-loader']}
	]
}
}
