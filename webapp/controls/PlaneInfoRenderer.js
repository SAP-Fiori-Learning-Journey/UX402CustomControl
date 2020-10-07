sap.ui.define([
	"sap/ui/core/Renderer"
], function(Renderer) {
	"use strict";

    var PlaneInfoRenderer = Renderer.extend("com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.controls.PlaneInfoRenderer");
    
    PlaneInfoRenderer.render = (oRm, oControl) => {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.write(">");
        oRm.write("<table align='center'>");
        oRm.write("<tr>");
        oRm.write("<td>");
        oRm.writeIcon("sap-icon://flight");
        oRm.write(" " + oControl.getPlaneType() + "</td>");
        oRm.write("</tr>");
        oRm.write("<tr>");
        oRm.write("<td>");
        oRm.writeIcon("sap-icon://person-placeholder");
        oRm.write(" " + oControl.getSeatMax() + "</td>");
        oRm.write("</tr>");
        oRm.write("<tr>");
        oRm.write("<td>");
        oRm.writeIcon("sap-icon://suitcase");
        oRm.write(" " + oControl.getSeatsOcc() + "</td>");
        oRm.write("</tr>");
        oRm.write("</table>");
        oRm.write("</div>");
    };

    return PlaneInfoRenderer;

});