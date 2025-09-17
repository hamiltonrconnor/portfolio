module.exports = {
    ci: {
        collect: {
            startServerCommand: "npm run preview",
            startServerReadyPattern: "Local:.*http",
            url: ['http://localhost:4174/portfolio/'],
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