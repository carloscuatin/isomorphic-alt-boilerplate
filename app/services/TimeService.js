module.exports = {
  name: 'time',
  read: (req, resource, params, config, callback) => {
    callback(null, Date.now());
  }
}
