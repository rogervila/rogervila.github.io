const mix = require('laravel-mix');

mix.options({
	// css urls will be processed manually
	processCssUrls: false,
	// Remove all js comments
	uglify: {
		comments: false
	},
	// Optimize css files
    purifyCss: false,
	postCss: [
		// Add css vendor prefixes for old browsers
		require('autoprefixer')({
			browsers: '> 1%'
		}),
		// remove duplicated css
		require('postcss-discard-duplicates'),
		// optimize color codes. ie: #ffffff -> #fff
		require('postcss-colormin')({
			legacy: true // IE support
		}),
		require('postcss-discard-comments')({
			removeAll: true
		})
	]
});

mix.setPublicPath('./');
mix.disableNotifications();

mix.combine([
    '_src/css/bulma.css',
    '_src/css/hero.css',
], 'assets/app.css');

mix.js('_src/js/app.js', 'assets/app.js');

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
