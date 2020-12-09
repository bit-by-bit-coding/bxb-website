// Main --------------------------------------------------------
/* exported main, updateGuiInfo */

function main() {

	var neuralNet = window.neuralNet = new NeuralNetwork();
	scene.add( neuralNet.meshComponents );

	run();

}
