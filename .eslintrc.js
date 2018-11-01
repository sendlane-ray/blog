module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
    // required to lint *.vue files
    plugins: ['vue', 'prettier'],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'linebreak-style': ['error', 'unix'],
        'no-console': 'off',
        'no-const-assign': 'warn',
        'no-this-before-super': 'warn',
        'no-undef': 'warn',
        'no-unreachable': 'warn',
        'no-unused-vars': 'warn',
        'constructor-super': 'warn',
        'valid-typeof': 'warn',
        eqeqeq: 'warn',
        'vue/no-unused-vars': 'error',
        'vue/max-attributes-per-line': [
            1,
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: true
                }
            }
        ],

        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ]
    }
};
