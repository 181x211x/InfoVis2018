function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth,
        height: window.innerHeight*0.8,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var  value_s = document.getElementById('output1').value;
    alert(value_s);
    value = Number(value_s);


    alert(value)

    var isovalue = value;
    var surfaces = Isosurfaces( volume, isovalue );



    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight*0.8 ] );
    });




    screen.loop();
}
