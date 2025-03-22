const siteUrl = process.env.SITE_URL || 'https://logibrium.com';

// add your private routes here
const exclude = [
    '/apple-icon*.png',
];

// Save crawling budget by not fetching SSG meta files
const NEXT_SSG_FILES = [
    '/*.json$',
    '/*_buildManifest.js$',
    '/*_middlewareManifest.js$',
    '/*_ssgManifest.js$',
    '/*.js$',
];

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl,
    generateRobotsTxt: true,
    exclude,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: NEXT_SSG_FILES,
            },
        ],
    },
    outDir: './out',
};

module.exports = config;
