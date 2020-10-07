sap.ui.define([
    "sap/m/Button"
], function (Button) {
    "use strict";

    return Button.extend("com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.controls.HoverButton", {

        metadata: {
            properties: {
                "allowHover": {
                    type: "boolean",
                    defaultValue: false
                },
                "hoverText": {
                    type: "string"
                }
            },
            events: {
                "hover": {}
            }
        },

        renderer: {},

        onmouseover: function(evt) {

            if(this.getAllowHover()) {
                this.fireHover();
            }

        }

    });

});