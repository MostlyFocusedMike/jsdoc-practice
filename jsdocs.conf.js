module.exports = {
    tags: {
        allowUnknownTags: true,
        dictionaries: ['jsdoc'],
    },
    source: {
        include: ['./src', './package.json', './README.md'],
        includePattern: '.js$',
        excludePattern: '(node_modules/|docs)',
    },
    plugins: [
        'plugins/markdown',
    ],
    templates: {
        cleverLinks: false,
        monospaceLinks: true,
        useLongnameInNav: false,
        showInheritedInNav: true,
        theme: 'cerulean',
    },
    opts: {
        destination: './docs',
        encoding: 'utf8',
        private: true,
        recurse: true,
        template: './node_modules/ink-docstrap/template',
        tutorials: './docs/tutorials',
    },
};
