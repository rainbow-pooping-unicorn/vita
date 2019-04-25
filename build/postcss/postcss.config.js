module.exports = ({ file, options, env }) => {

  const environment = process.env.NODE_ENV;

  return {
    plugins: {
      'autoprefixer': true,
      'cssnano': environment === 'production' ? options.cssnano : false
    }
  }
}
