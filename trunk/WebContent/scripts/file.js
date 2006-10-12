/*
 * Listener for menu file
 * author: Biao Zhang
 * date: 2006-9-27
 */

var tabcount = 0;
var newClassDialog = 0;
 function OnFileOpen() {
 	/*var dialog = document.getElementById("openfile");	
 	dialog.style.zIndex = "16";*/
 	
 	/*var dialog = document.createElement("div");
 	dialog.id = "openfile";
 	dialog.src = "components/openfiledialog.xml";
 	document.getElementsByTagName("body")[0].appendChild(dialog);
 	sendRequest(dialog.src, fillComponent, dialog);*/ 
 	
 	var properties = {	dojoType:"FloatingPane",
 						id:"openfiledialog",
 						title:"Open File",
 						iconSrc:"icons/openFolder.gif",
 						constrainToContainer:true,
 						hasShadow:true,
 						resizable:true,
 						taskBarId:"hiddentaskbar",
 						windowState:"normal",
 						displayCloseAction:true,
 						displayMinimizeAction:false,
 						displayMaximizeAction:false,
 						toggle:"explode"
 					};
	//var parentNode = document.getElementById("window");
	//dojo.widget.fromScript("FloatingPane", properties, parentNode, "last");
 	
 	var dialog = document.createElement("div");
 	dialog.src = "components/openfiledialog.xml";
 	dialog.setAttribute("class", "openfiledialog");
 	dialog.setAttribute("className", "openfiledialog");
 	document.body.appendChild(dialog);
 	sendRequest(dialog.src, fillComponent, dialog);
 	
 	dojo.widget.createWidget("FloatingPane", properties, dialog);
 }

 function OnNewButtonClick() {
 	var fileName = document.getElementById("newclassname").value;
 	OnFileNewClass(fileName); 	
 }
 function OnFileNewClass(fileName) {
 	tabcount++;
 	var properties = {
 		dojoType:"ContentPane",
 		widgetId:"tab" + tabcount,
 		id:"tab" + tabcount,
 		label:fileName
 	};
 	
 	var tabdiv = document.createElement("div");
 	var iframeId = properties.id + "_frame";
 	var cframe = document.createElement("iframe");
 	cframe.id = iframeId;
 	cframe.src = "blank.html";
 	cframe.setAttribute("class", "codeframe");
 	cframe.setAttribute("className", "codeframe");
 	cframe.frameBorder = "no";
	tabdiv.appendChild(cframe);
 	
 	var parentNode = dojo.widget.getWidgetById("codeareaMainTabContainer");
 	var tab = dojo.widget.createWidget("ContentPane", properties, tabdiv);
 	parentNode.addChild(tab);
 	parentNode.selectTab(tab);
 	
 	var doc = cframe.contentWindow.document;
 	doc.designMode = "on";
 	
 	setIDEWindowTitle(fileName);
 	//doc.write("<html><head><link rel='stylesheet' type='text/css' href='stylesheets/common.css'/></head><body>" + "public class " + fileName + " {<br/>" + "public static void main(String[] args) {<br/>}<br/>}" + "</body></html>");
 	//doc.body.innerHTML = "public class " + fileName + " {<br>" + "public static void main(String[] args) {<br>}<br>}";
 }
 /*
 function getNewClassName() {
 	var properties = {
 		dojoType:"Dialog",
 		id:"newclassdialog",
 		widgetId:"newclassdialog",
 		bgColor:"white",
 		bgOpacity:"0.5",
 		toggle:"fade",
 		toggleDuration:"250"
 	};
 	var newDiv = document.createElement("div");
 	newDiv.style.height = "200px";
 	newDiv.style.width = "200px";
 	newDiv.innerHTML = "HELLO<input type='text'></input>";
 	var newClassDialog = dojo.widget.createWidget("Dialog", properties, newDiv);
 	var parentNode = document.getElementById("window");
 	parentNode.appendChild(newDiv);
 	return "Hello";	
 }*/