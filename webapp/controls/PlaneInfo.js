sap.ui.define([
    "sap/ui/core/Control",
    "com/sap/training/ux402/fullscreen/UX402_FullScreenExercise/controls/PlaneInfoRenderer"
], function(Control, PlaneInfoRenderer) {
	"use strict";

	return Control.extend("com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.controls.PlaneInfo", {
        metadata :{
            properties: {
                "seatMax": {
                    type: "string"
                },
                "planeType": {
                    type: "string"
                },
                "seatsOcc": {
                    type: "string"
                }
            }
        },
        renderer: PlaneInfoRenderer
    });
    
});