$( function() {
    var pipeline = AeroGear.Pipeline(
        {
            name: "controllerPipe",
            settings: {
                baseURL: "http://localhost:8080/aerogear-controller-demo",
                endpoint: "/cars"
            }
        }
    );

    var controllerPipe = pipeline.pipes.controllerPipe;

    controllerPipe.read({
        success: function( data ) {
            console.log( data );
        },
        error: function( error ) {
            console.log( error );
        }
    });
});