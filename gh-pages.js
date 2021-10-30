var ghpages = require('gh-pages');

ghpages.publish(
	'docs', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/FS-Frost/svelte-app.git', // Update to point to your repository
		user: {
			name: 'FS-Frost', // update to use your name
			email: 'fsfrost17@gmail.com' // Update to use your email
		}
	},
	() => {
		console.log('Deploy Complete!');
	}
);
