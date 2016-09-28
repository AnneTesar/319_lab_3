// CalcBinaryULATOR.JS
//
//
//

// 
var CalcBinary = {

Model : {
},


View : {
  textRow : {id: "textRow", type: "text", value: "", onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  buttonTilde : {id: "buttonTilde", type: "button", value: "~", onclick:""},
  buttonAdd : {id: "buttonAdd", type: "button", value: "+", onclick:""},
  buttonPercent : {id: "buttonPercent", type: "button", value: "%", onclick:""},
  buttonShiftLeft : {id: "buttonShiftLeft", type: "button", value: "<<", onclick:""},
  buttonShiftRight : {id: "button5", type: "button", value: ">>", onclick:""},
  buttonSubtract : {id: "buttonSubtract", type: "button", value: "-", onclick:""},
  buttonAmpersand : {id: "buttonAmpersand", type: "button", value: "&", onclick:""},
  buttonPipe : {id: "buttonPipe", type: "button", value: "|", onclick:""},
  buttonMultiply : {id: "buttonMultiply", type: "button", value: "*", onclick:""},
  buttonDivide : {id: "buttonDivide", type: "button", value: "/", onclick:""},
  buttonMR : {id: "buttonMR", type: "button", value: "MR", onclick:""},
  buttonMminus : {id: "buttonMminus", type: "button", value: "M-", onclick:""},
  buttonMplus : {id: "buttonMplus", type: "button", value: "M+", onclick:""},
  buttonC : {id: "buttonC", type: "button", value: "C", onclick:""},
  buttonMC : {id: "buttonMC", type: "button", value: "MC", onclick:""},
  buttonEquals : {id: "buttonEquals", type: "button", value: "=", onclick:""}
},

Memory : {
  memoryValue : {value:""},
  firstValue : {value: ""},
  secondValue : {value: ""},
  operation : {value: ""},
  currentValue : {value: 0, firstHalf: 0, secondHalf: 0, hasDecimal: false, reset:function() {this.value=0; this.firstHalf=0; this.secondHalf=0; this.hasDecimal=false;}}
},

Controller : {

},

run : function() {
  CalcBinary.attachHandlers();
  console.log(CalcBinary.display());
  return CalcBinary.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>" + CalcBinary.displayElement(CalcBinary.View.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += CalcBinary.displayElement(CalcBinary.View.button0);
  s += CalcBinary.displayElement(CalcBinary.View.button1);
  s += CalcBinary.displayElement(CalcBinary.View.buttonTilde);
  s += "<tr><td>";
  s += CalcBinary.displayElement(CalcBinary.View.buttonAdd);
  s += CalcBinary.displayElement(CalcBinary.View.buttonPercent);
  s += CalcBinary.displayElement(CalcBinary.View.buttonShiftLeft);
  s += "<tr><td>";
  s += CalcBinary.displayElement(CalcBinary.View.buttonShiftRight);
  s += CalcBinary.displayElement(CalcBinary.View.buttonSubtract);
  s += CalcBinary.displayElement(CalcBinary.View.buttonAmpersand);
  s += "<tr><td>";
  s += CalcBinary.displayElement(CalcBinary.View.buttonPipe);
  s += CalcBinary.displayElement(CalcBinary.View.buttonMultiply);
  s += CalcBinary.displayElement(CalcBinary.View.buttonDivide);
  s += "<tr><td>";
  s += CalcBinary.displayElement(CalcBinary.View.buttonMR);
  s += CalcBinary.displayElement(CalcBinary.View.buttonMminus);
  s += CalcBinary.displayElement(CalcBinary.View.buttonMplus);
  s += "<tr><td>";
  s += CalcBinary.displayElement(CalcBinary.View.buttonC);
  s += CalcBinary.displayElement(CalcBinary.View.buttonMC);
  s += CalcBinary.displayElement(CalcBinary.View.buttonEquals);
  s += "</tr></td></table>";
  return s;
},

addToTextRow : function(newNum) {
	if (CalcBinary.Memory.currentValue.hasDecimal) {
		CalcBinary.Memory.currentValue.secondHalf = ( CalcBinary.Memory.currentValue.secondHalf * 10 ) + newNum;
		CalcBinary.Memory.currentValue.value = CalcBinary.Memory.currentValue.firstHalf + "." + CalcBinary.Memory.currentValue.secondHalf;
		console.log("CalcBinary.Memory.currentValue.value: " + CalcBinary.Memory.currentValue.value);
		return CalcBinary.Memory.currentValue.value;
	}
	else {
		CalcBinary.Memory.currentValue.firstHalf = ( CalcBinary.Memory.currentValue.firstHalf * 10 ) + newNum;
		CalcBinary.Memory.currentValue.value = CalcBinary.Memory.currentValue.firstHalf;
		return CalcBinary.Memory.currentValue.value;
	}
	
},

doCalcBinaryuation : function() {
	var val;
	if (CalcBinary.Memory.operation.value == "+") {
		val = CalcBinary.Memory.firstValue.value + CalcBinary.Memory.secondValue.value;
	}
	else if (CalcBinary.Memory.operation.value == "-") {
		val = CalcBinary.Memory.firstValue.value - CalcBinary.Memory.secondValue.value;
	}
	else if (CalcBinary.Memory.operation.value == "*") {
		val = CalcBinary.Memory.firstValue.value * CalcBinary.Memory.secondValue.value;
	}
	else if (CalcBinary.Memory.operation.value == "/") {
		val = CalcBinary.Memory.firstValue.value / CalcBinary.Memory.secondValue.value;
	}
	return val;
},

attachHandlers : function() {
  CalcBinary.View.button0.onclick = "CalcBinary.button0Handler()";
  CalcBinary.View.button1.onclick = "CalcBinary.button1Handler()";
  CalcBinary.View.buttonTilde.onclick = "CalcBinary.buttonTildeHandler()";
  CalcBinary.View.buttonAdd.onclick = "CalcBinary.buttonAddHandler()";
  CalcBinary.View.buttonPercent.onclick = "CalcBinary.buttonPercentHandler()";
  CalcBinary.View.buttonShiftLeft.onclick = "CalcBinary.buttonShiftLeftHandler()";
  CalcBinary.View.buttonShiftRight.onclick = "CalcBinary.buttonShiftRightHandler()";
  CalcBinary.View.buttonSubtract.onclick = "CalcBinary.buttonSubtractHandler()";
  CalcBinary.View.buttonAmpersand.onclick = "CalcBinary.buttonAmpersandHandler()";
  CalcBinary.View.buttonPipe.onclick = "CalcBinary.buttonPipeHandler()";
  CalcBinary.View.buttonMultiply.onclick = "CalcBinary.buttonMultiplyHandler()";
  CalcBinary.View.buttonDivide.onclick = "CalcBinary.buttonDivideHandler()";
  CalcBinary.View.buttonMR.onclick = "CalcBinary.buttonMRHandler()";
  CalcBinary.View.buttonMminus.onclick = "CalcBinary.buttonMminusHandler()";
  CalcBinary.View.buttonMplus.onclick = "CalcBinary.buttonMplusHandler()";
  CalcBinary.View.buttonC.onclick = "CalcBinary.buttonCHandler()";
  CalcBinary.View.buttonMC.onclick = "CalcBinary.buttonMCHandler()";
  CalcBinary.View.buttonEquals.onclick = "CalcBinary.buttonEqualsHandler()";
},

button0Handler : function() {
	
},

button1Handler : function() {
	
},

buttonTildeHandler : function() {
	
},

buttonAddHandler : function() {

},

buttonPercentHandler : function() {
	
},

buttonShiftLeftHandler : function() {
	
},

buttonShiftRightHandler : function() {
	
},
	
buttonSubtractHandler : function() {

},

buttonAmpersandHandler : function() {
	
},

buttonPipeHandler : function() {
	
},

buttonMultiplyHandler : function() {

},

buttonDivideHandler : function() {

},

buttonMRHandler : function() {

},

buttonMminusHandler : function() {
	
},

buttonMplusHandler : function() {
	
},

buttonCHandler : function() {

},	

buttonMCHandler : function() {

},

buttonEqualsHandler : function() {

},


} // end of CalcBinary;
