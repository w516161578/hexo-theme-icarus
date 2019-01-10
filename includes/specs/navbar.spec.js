const { doc, type, defaultValue } = require('../common/utils').descriptors;

module.exports = {
    [type]: 'object',
    [doc]: 'Navigation bar link settings',
    menu: {
        [type]: 'object',
        [doc]: 'Navigation bar menu links',
        [defaultValue]: {
            '1': {
                name: 'Home',
                icon: 'fas fa-home',
                path: '/'
            },
            '2': {
                name: 'Archives',
                path: '/archives',
                icon: 'fas fa-archive'
            },
            '3': {
                name: 'Categories',
                path: '/categories',
                icon: 'fas fa-th-list'
            },
            '4': {
                name: 'Tags',
                path: '/tags',
                icon: 'fas fa-tags'
            },
            '5': {
                name: 'About',
                path: '/about',
                icon: 'fas fa-user'
            }
        },
        '*': {
            [type]: 'object',
            [doc]: 'Path or URL to the menu item'
        }
    },
    links: {
        ...require('./icon_link.spec'),
        [doc]: 'Navigation bar links to be shown on the right',
        [defaultValue]: {
            'Download on GitHub': {
                icon: 'fab fa-github',
                url: 'http://github.com/ppoffice/hexo-theme-icarus'
            }
        }
    }
};