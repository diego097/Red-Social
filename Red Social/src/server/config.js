//configuracion neta del servidor

module.exports = app =>{

    //settings
    app.set('port', process.env.PORT || 3000);
    
    // middlewares

    //routes

    //errorhandlers
    return app;
}