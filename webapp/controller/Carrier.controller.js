sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.controller.Carrier", {

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onPress: function (oEvent) {
			
			var oItem = oEvent.getSource();
			var oCtx = oItem.getBindingContext();
			var sCarrid = oCtx.getProperty("carrid");
			
			this.getRouter().navTo("flights", {
				carrierId: sCarrid                
			}, false);
			
		}

	});

});