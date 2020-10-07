/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/training/ux402/fullscreen/UX402_FullScreenExercise/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});