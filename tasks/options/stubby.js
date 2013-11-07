module.exports = {
  stubsServer: {
                options: {
                    watch: 'stubby_config.yaml',
                    callback: function (server, options) {
                      server.get(1, function (err, endpoint) {
                        if (!err)
                           console.log(endpoint);
                   });
                  }
              },
              files: [{
                src: [ 'stubby_config.yaml' ]
    }]
  }
};