const moment = require('moment');
const pkg = require('../package.json');

const { description } = pkg;

module.exports = {
    name: 'Jungle Oats',
    description,
    url: 'http://jungleoats.surge.sh',
    image: {
        url: 'http://jungleoats.surge.sh/images/jungleoats.png',
        width: 492,
        height: 492,
    },
    dateCreated: '2005-11-21',
    dateModified: moment().format(),
    datePublished: '2017-3-13',
};
