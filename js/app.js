angular.module('aerospace-diagram', [])
  .controller('MainCtrl', ['$scope','$sce', function($scope,$sce) {
	$scope.getHTML = function(html) {return $sce.trustAsHtml(html);};
    $scope.test = 'test';
    $scope.arr = [
               {
            	   title: "Widget Container",
            	   description: "The Widget Container contains a list of all created widgets. This container allows the controllers to get specific widget or a group of widgets, as well as allow for the widgets to be modify.",
            	   pseudoCode: 
    "<pre>class WidgetContainer()\r\n" +
    "	widgetList <- []\r\n" +
    "	procedure createWidget(widget)\r\n" +
    "		size <- widgetList.length\r\n" +
    "		widget.id <- size\r\n" +
    "		add widget to widgetList\r\n" +
    "		return widget\r\n" +
    "	procedure getWidget(widgetId)\r\n" +
    "		retWidget <- null\r\n" +
    "		for each(widget in widgetList)\r\n" +
    "			if(widget.id is widgetId) then\r\n" +
    "				retWidget <- widget\r\n" +
    "		return retWidget\r\n" +
    "	procedure getAllWidgets()\r\n" +
    "		return widgetList\r\n" +
    "	procedure setWidget(widgetId, widget)\r\n" +
    "		widget.id <- widgetId\r\n" +
    "		for each(item in widgetList)\r\n" +
    "			if(item.id is widget.id)\r\n" +
    "				item <- widget</pre>",
            	   umlCode: 
    "<ul>" +
    "	<li>- widgetList: Widget[]</li>" +
    "</ul>" +
    "<hr />" +
    "<ul>" +
    "	<li>+ createWidget(widget)</li>" +
    "	<li>+ getWidget(widgetId)</li>" +
    "	<li>+ getAllWidgets()</li>" +
    "	<li>+ setWidget(widgetId,widget)</li>" +
    "</ul>"
               } , {
            	   title: "DataSrc Container",
            	   description: "The Data Source Container contains a list of all the feeds that are available from all the sources that are being monitored. This container allows the graphing controller to determine which widget will display which feed(s). The Data Source controller will allow users to monitor new sources",
            	   pseudoCode: "",
            	   umlCode: ""
               } , {
            	   title: "Widget Creation Ctrl",
            	   description: "",
            	   pseudoCode: "",
            	   umlCode: ""
               } , {
            	   title: "Graphing Ctrl",
            	   description: "",
            	   pseudoCode: "",
            	   umlCode: ""
               } , {
            	   title: "DataSrc Ctrl",
            	   description: "",
            	   pseudoCode: "",
            	   umlCode: ""
               } , {
            	   title: "Save/Load Ctrl",
            	   description: "",
            	   pseudoCode: "",
            	   umlCode: ""
               }
    ];
  }]);