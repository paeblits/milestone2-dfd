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
            	   pseudoCode: 
   "<pre>class DataSrcContainer()\r\n" +
   "	dataFeedList <- DataFeed[]\r\n" +
   "	procedure addFeed(feed)\r\n" +
   "		toAdd <- true\r\n" +
   "		for each(dataFeed in dataFeedList)\r\n" +
   "			if(dataFeed.getId() is feed.getId())\r\n" +
   "				toAdd <- false\r\n" +
   "		if(toAdd)\r\n" +
   "			add feed to dataFeedList\r\n" +
   "	procedure getFeed(feedId)\r\n" +
   "		retFeed <- null\r\n" +
   "		for each(feed in dataFeedList)\r\n" +
   "			if(feed.getId() is feedId)\r\n" +
   "				retFeed <- feed\r\n" +
   "		return retFeed\r\n" +
   "	procedure getAllFeeds()\r\n" +
   "		return dataFeedList\r\n" +
   "</pre>",
            	   umlCode: ""
               } , {
            	   title: "Widget Creation Ctrl",
            	   description: "The Widget Creation Controller is responsible for initiating the 'createWidget' function from the Widget Container. The Widget Creation Controller will send an instance of a new widget object to the Widget Container to be added to the list of all created widgets",
            	   pseudoCode: "",
            	   umlCode: ""
               } , {
            	   title: "Graphing Ctrl",
            	   description: "",
            	   pseudoCode: "",
            	   umlCode: ""
               } , {
            	   title: "DataSrc Ctrl",
            	   description: "The Data Source Controller is responsible for adding new data sources to the Data Source Container",
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
