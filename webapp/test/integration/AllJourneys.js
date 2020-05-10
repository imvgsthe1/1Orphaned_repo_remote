jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"fioritest/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"fioritest/test/integration/pages/Worklist",
		"fioritest/test/integration/pages/Object",
		"fioritest/test/integration/pages/NotFound",
		"fioritest/test/integration/pages/Browser",
		"fioritest/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "fioritest.view."
	});

	sap.ui.require([
		"fioritest/test/integration/WorklistJourney",
		"fioritest/test/integration/ObjectJourney",
		"fioritest/test/integration/NavigationJourney",
		"fioritest/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});