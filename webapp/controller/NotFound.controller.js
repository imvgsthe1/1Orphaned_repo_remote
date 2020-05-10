sap.ui.define([
		"fioritest/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("fioritest.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);