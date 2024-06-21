const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // Archivo de entrada principal
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Directorio de salida
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'], // Regla para archivos CSS
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]', // Regla para imágenes y otros recursos
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@add': path.resolve(__dirname, './src/operations/add.js'),
            '@subtract': path.resolve(__dirname, './src/operations/subtract.js'),
            '@multiply': path.resolve(__dirname, './src/operations/multiply.js'),
            '@divide': path.resolve(__dirname, './src/operations/divide.js'),
            '@getValidElement': path.resolve(__dirname, './src/generic/getValidElement.js'),
            '@catchErrors': path.resolve(__dirname, './src/generic/catchErrors.js'),
        },
    },
};
