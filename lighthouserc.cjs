module.exports = {
    ci: {
        collect: {
            url: ['http://hamiltonrconnor.github.io/portfolio/'],
            numberOfRuns: 3,
            settings: {
                chromeFlags: '--no-sandbox',
                preset: 'desktop',
            },
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.9 }],
                'categories:accessibility': ['warn', { minScore: 0.9 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};