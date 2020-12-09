// Run --------------------------------------------------------

function update() {

	updateHelpers();


		var deltaTime = clock.getDelta();
		neuralNet.update( deltaTime );


	
}

// ----  draw loop
function run() {

	requestAnimationFrame( run );
	renderer.setClearColor( sceneSettings.bgColor, 1 );
	renderer.clear();
	update();
	renderer.render( scene, camera );
	FRAME_COUNT ++;

}
