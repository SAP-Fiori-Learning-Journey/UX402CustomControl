sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/sap/training/ux402/fullscreen/UX402_FullScreenExercise/controls/HoverButton",
	"sap/m/MessageToast",
	"com/sap/training/ux402/fullscreen/UX402_FullScreenExercise/controls/PlaneInfo"
], function (Controller, HoverButton, MessageToast, PlaneInfo) {
	"use strict";

	return Controller.extend("com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.controller.Flights", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("flights").attachMatched(this._onObjectMatched, this);
		},
		
		onNavBack: function() {
			
			var oHistory, sPreviousHash, oRouter;
			
			oHistory = sap.ui.core.routing.History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			
			if(sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", true);
			}
			
		},

		onHover: function(oEvent) {
			
			var sText = this.getOwnerComponent().getModel("i18n").getProperty("msgSeatsAv");
			MessageToast.show(oEvent.getSource().getHoverText() + " " + sText, {duration: 1000});

		},
		
		_onObjectMatched: function(oEvent) {
			
			var oArgs = oEvent.getParameter("arguments");
			this._sCarrierId = oArgs.carrierId;
			
			var oView = this.getView();
			oView.bindElement({
				path: "/CarrierCollection('" + this._sCarrierId + "')",
				events: {
					dataRequested: function() {
						oView.setBusy(true);
					},
					dataReceived: function() {
						oView.setBusy(false);
					}
				}
			});
		}

	});

});