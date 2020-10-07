/*global QUnit*/

sap.ui.define([
	"com/sap/training/ux402/fullscreen/UX402_FullScreenExercise/controller/Main.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Main Controller");

	QUnit.test("I should test the Main controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});