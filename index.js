var uuid = require('node-uuid');

var guid = uuid.v4();

filePath = process.argv[2];

var printFileXML = function () {
	var capGuid1 = uuid.v4().toUpperCase();
	var capGuid2 = uuid.v4().toUpperCase();
	var dashGuid = uuid.v4().toUpperCase();

	capGuid1 = removeDashs(capGuid1);
	capGuid2 = removeDashs(capGuid2);

	console.log('<Component Permanent="yes" Id="cmp'+capGuid1+'" Guid="{'+dashGuid+'}">');
	console.log('    <File Id="fil'+capGuid2+'" KeyPath="yes" Source="$(var.BuildPath)\\'+filePath+'" />');
	console.log('</Component>');
}

var removeDashs = function (start) {
	return start.replace(/-/g, "");
}

printFileXML();