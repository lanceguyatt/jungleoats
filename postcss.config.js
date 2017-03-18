module.exports = {
    plugins: [
        require('postcss-import'),
        require('css-mqpacker', {
            sort: true,
        }),
        require('postcss-custom-properties'),
        require('autoprefixer', {
            remove: false,
        }),
    ],
};
