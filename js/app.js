angular.module('aerospace-diagram', [])
  .controller('MainCtrl', ['$scope','$sce', function($scope,$sce) {
	$scope.getHTML = function(html) {return $sce.trustAsHtml(html);};
    $scope.test = 'test';
    $scope.arr = [
               {
            	   title: "Widget Container",
            	   description: "The Widget Container contains a list of all created widgets. This container allows the controllers to get specific widget or a group of widgets, as well as allow for the widgets to be modified.",
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
    "			if(item.id is widget.id) then\r\n" +
    "				item <- widget</pre>",
            	   umlCode: 
    "<ul>" +
    "	<li>- widgetList: Widget[]</li>" +
    "</ul>" +
    "<hr />" +
    "<ul>" +
    "	<li>+ createWidget(widget): Widget</li>" +
    "	<li>+ getWidget(widgetId): Widget</li>" +
    "	<li>+ getAllWidgets(): Widget[]</li>" +
    "	<li>+ setWidget(widgetId,widget): void</li>" +
    "</ul>"
               } , {
            	   title: "DataSrc Container",
            	   description: "The Data Source Container contains a list of all the feeds that are available from all the sources that are being monitored. This container allows the graphing controller to determine which widget will display which feed(s). The Data Source controller will allow users to monitor new sources.",
            	   pseudoCode: 
   "<pre>class DataSrcContainer()\r\n" +
   "	dataSourceList <- DataSource[]\r\n" +
   "	procedure addSource(source)\r\n" +
   "		toAdd <- true\r\n" +
   "		for each(dataSource in dataSourceList)\r\n" +
   "			if(dataSource.getId() is source.getId()) then\r\n" +
   "				toAdd <- false\r\n" +
   "		if(toAdd) then\r\n" +
   "			add source to dataSourceList\r\n" +
   "	procedure getFeed(feedId)\r\n" +
   "		retFeed <- null\r\n" +
   "		dataFeedList <- getAllFeeds()\r\n" +
   "		for each(feed in dataFeedList)\r\n" +
   "			if(feed.getId() is feedId) then\r\n" +
   "				retFeed <- feed\r\n" +
   "		return retFeed\r\n" +
   "	procedure getAllFeeds()\r\n" +
   "		dataFeedList <- []\r\n" +
   "		for each(source in dataSourceList)\r\n" +
   "			add source.getFeeds() to dataFeedList\r\n" +
   "		return dataFeedList\r\n" +
   "	procedure getAllSources()\r\n" +
   "		return dataSourceList</pre>",
            	   umlCode: 
	"<ul>" +
	"	<li>- dataFeedList: DataFeed[]</li>" +
	"</ul>" +
	"<hr />" +
	"<ul>" +
	"	<li>+ addSource(source): void</li>" +
	"	<li>+ getFeed(feedId): DataFeed</li>" +
	"	<li>+ getAllFeeds(): DataFeed[]</li>" +
	"	<li>+ getAllSources(): DataSource[]</li>" +
	"</ul>"
               } , {
            	   title: "Widget Creation Ctrl",
            	   description: "The Widget Creation Controller is responsible for initiating the 'createWidget' function from the Widget Container. The Widget Creation Controller will send an instance of a new widget object to the Widget Container to be added to the list of all created widgets.",
            	   pseudoCode: 
   "<pre>class WidgetCreationCtrl\r\n" +
   "	widget <- new Widget()\r\n" +
   "	procedure createWidget(input)\r\n" +
   "		widget.name <- input.name\r\n" +
   "		widget.controller <- input.controller\r\n" +
   "		widget.properties <- input.properties\r\n" +
   "		WidgetContainer.createWidget(widget)</pre>",
            	   umlCode: 
	"<ul>" +
	"	<li>+ widget: Widget</li>" +
	"	<li>+ createWidget(input): void</li>" +
	"</ul>"
               } , {
            	   title: "Graphing Ctrl",
            	   description: "The Graphing Controller has a reference to the widget object (the wrapper object for the graph) as well as the AngularJS model of the Highcharts instance. The controller takes input from the user to modify and update an instance of a chart, such as the type of chart to represent the data, aesthetic options, and specifying which data feeds to view. Functions for updating chart configuration are not needed since we leverage AngularJS model/view data binding.",
            	   pseudoCode:
  "<pre>class GraphingCtrl\r\n" +
  " chartOptions <- highcharts-ng directive\r\n" +
  " procedure addDataFeed(id)\r\n" +
  "   dataFeeds.push <- DataSrcContainer.getFeed(id)\r\n" +
  " procedure removeDataFeed(id)\r\n" +
  "   dataFeeds.pop\r\n" +
  " procedure increaseRefreshRate()\r\n" +
  "   refreshRate ++ \r\n" +
  " procedure decreaseRefreshRate()\r\n" +
  "   refreshRate -- \r\n" +
  " procedure seriesClick(seriesObj)\r\n" +
  "   selectedSeries <- seriesObj\r\n" +
  " procedure pointClick(pointObj)\r\n" +
  "   selectedPoint <- pointObj</pre>",
            	   umlCode: 
  "<ul>" +
  " <li>+ addDataFeed(id): void</li>" +
  " <li>+ removeDataFeed(id): void</li>" +
  " <li>+ increaseRefreshRate(): void</li>" +
  " <li>+ decreaseRefreshRate(): void</li>" +
  " <li>+ seriesClick(seriesObj): void</li>" +
  " <li>+ pointClick(pointObj): void</li>" +
  "</ul>"
               } , {
            	   title: "DataSrc Ctrl",
            	   description: "The Data Source Controller is responsible for adding new data sources to the Data Source Container. The Data Source Controller will send an instance of a new data source object to the Data Source Container, which the Data Source Container will query the source for feeds that can be added to the list of available feeds.",
            	   pseudoCode: 
	"<pre>class DataSrcCtrl\r\n" +
	"	source <- new DataSource()\r\n" +
	"	procedure addDataSource(input)\r\n" +
	"		source.host <- input.host\r\n" +
	"		source.port <- input.port\r\n" +
	"		source.username <- input.username\r\n" +
	"		source.password <- input.password\r\n" +
	"		DataSrcContainer.addSource(source)</pre>",
            	   umlCode: 
	"<ul>" +
	"	<li>+ source: DataSource</li>" +
	"	<li>+ addDataSource(input): void</li>" +
	"</ul>"
               } , {
            	   title: "Save/Load Ctrl",
            	   description: "The Save Load Controller allows users to export or import the layout. The file generated will be an xml file containing data about all the widgets generated, the feeds that those widgets are monitoring and the list of all available data feeds.",
            	   pseudoCode: 
	"<pre>class SaveLoadCtrl\r\n" +
	"	procedure exportLayout()\r\n" +
	"		widgets <- WidgetContainer.getAllWidgets()\r\n" +
	"		sources <- DataSrcContainer.getAllSources()\r\n" +
	"		FileSaver.saveAs([widgets,sources],'layout.xml')\r\n" +
	"	procedure importLayout(element)\r\n" +
	"		file <- elemnt.target.files[0]\r\n" +
	"		reader = new FileReader()\r\n" +
	"		xmlContent <- reader.readAsText(file)\r\n" +
	"		json <- xml-to-json(xmlContent)\r\n" +
	"		for each(widget in json.widgets)\r\n" +
	"			WidgetContainer.createWidget(widget)\r\n" +
	"		for each(source in json.sources)\r\n" +
	"			DataSrcContainer.addSource(source)</pre>",
            	   umlCode: 
	"<ul>" +
	"	<li>+ exportLayout(): void</li>" +
	"	<li>+ importLayout(element): void</li>" +
	"</ul>"
               } , {
                 title: "Server",
                 description: "The Server is the proxy between the back-end servers/services and the clients. To prevent the back-end from being flooded with numerious requests from the clients, the Server will periodically pull data from the back-end and send the data to the clients. The Server will also connect to a new server when a client makes a request to pull data from a new server. Unlike the other modules, this module will run on a JAVA server.",
                 pseudoCode: 
	"<pre>class ServerService\r\n" +
	"	dataSourceList <- DataSource[]\r\n" +
	"	clientList <- Socket[]\r\n" +
	"	serverSocket <- new ServerSocket()\r\n" +
	"	procedure connectToSource(input)\r\n" +
	"		toAdd <- true\r\n" +
	"		source <- new DataSource()\r\n" +
	"		source.host <- input.host\r\n" +
	"		source.post <- input.port\r\n" +
	"		source.username <- input.username\r\n" +
	"		source.password <- input.password\r\n" +
	"		for each(dataSource in dataSourceList)\r\n" +
	"			if(dataSource.getId() is source.getId())\r\n" +
	"				toAdd <- false\r\n" +
	"		if(toAdd is true) then\r\n" +
	"			source.connect()\r\n" +
	"			if(source.isConnected() is true) then\r\n" +
	"				add source to dataSourceList\r\n" +
	"	procedure listenForClients()\r\n" +
	"		client <- serverSocket.accept()\r\n" +
	"		add client to clientList\r\n" +
	"	procedure pushDataToClients()\r\n" +
	"		jsonString <- dataSourceList.toJson()\r\n" +
	"		for each(client in clientList)\r\n" +
	"			writer <- new PrintWriter(client.getOutputStream())\r\n" +
	"			writer.print(jsonString)\r\n" +
	"			reader <- new InputStreamReader(client.getInputStream())\r\n" +
	"			input <- reader.readLine()\r\n" +
	"			if(input.isEmpty() is false)\r\n" +
	"				connectToSource(input)",
                 umlCode: 
	"<ul>" +
	"	<li>- dataSourceList: DataSource[]</li>" +
	"	<li>- clientList: Socket[]</li>" +
	"	<li>- serverSocket: ServerSocket</li>" +
	"	<li>- connectToSource(input): void</li>" +
	"</ul>" +
	"<hr />" +
	"<ul>" +
	"	<li>+ listenForClient(): void</li>" +
	"	<li>+ pushDataToClient(): void</li>" +
	"</ul>"

               }
    ];
  }]);
