function main()
{
    var volume = new KVS.CreateTornadoData( 64, 64, 64 );
    var screen = new KVS.THREEScreen();

    screen.init( volume );
    setup();
    screen.loop();

    function setup()
    {
        var color = new KVS.Vec3( 0, 0, 0 );
        var box = new KVS.BoundingBox();
        box.setColor( color );
        box.setWidth( 2 );

        var seed_point = volume.objectCenter();
        var streamline1 = new KVS.Streamline();
        streamline1.setIntegrationStepLength( 11 );
        streamline1.setIntegrationTime( 20 );
        streamline1.setIntegrationMethod( KVS.RungeKutta4 );
        streamline1.setIntegrationDirection( KVS.ForwardDirection );
        streamline1.setLineWidth( 5 );
        streamline1.setSeedPoint( seed_point );

        var streamline2 = new KVS.Streamline();
        streamline2.setIntegrationStepLength( 0.5 );
        streamline2.setIntegrationTime( 500 );
        streamline2.setIntegrationMethod( KVS.RungeKutta4 );
        streamline2.setIntegrationDirection( KVS.ForwardDirection );
        streamline2.setLineWidth( 5 );
        streamline2.setSeedPoint( seed_point );

        //streamline.setColor(0,255,255);

        var line1 = KVS.ToTHREELine( box.exec( volume ) );
        var line2 = KVS.ToTHREELine( streamline1.exec( volume ) );
        var line3 = KVS.ToTHREELine( streamline2.exec( volume ) );
        screen.scene.add( line1 );
        screen.scene.add( line2 );
        screen.scene.add( line3 );
        screen.draw();

        document.addEventListener( 'mousemove', function() {
            screen.light.position.copy( screen.camera.position );
        });
    }
}
