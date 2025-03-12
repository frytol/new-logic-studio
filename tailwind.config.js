import winduum from 'winduum/plugin'

export default {
    darkMode: 'class',
    content: [
        './node_modules/winduum/src/**/*.js',
        './src/**/*.{vue,js,ts}'
    ],
    plugins: [
        winduum()
    ]
}