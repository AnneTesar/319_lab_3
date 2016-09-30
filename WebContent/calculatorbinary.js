// CALCULATORBINARY.JS
//
//
//

// 
var CalcBinary = {

Model : {
},


View : {
  textRow : {id: "textRowBinary", type: "text", value: "", onclick:""},
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
  memoryValue : {value:0},
  firstValue : {value: ""},
  secondValue : {value: ""},
  operation : {value: ""},
  currentValue : {value: 0, string:"", reset:function() {this.value=0; this.string="";}}
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

addToNumber : function(num) {
	CalcBinary.Memory.currentValue.string += num;
	CalcBinary.Memory.currentValue.value = parseInt(CalcBinary.Memory.currentValue.string, 2);
	console.log("CurrentValue: " + CalcBinary.Memory.currentValue.value);
	return CalcBinary.Memory.currentValue.string;
},

doCalculation : function() {
	var val;
	if (CalcBinary.Memory.operation.value == "&") {
		val = CalcBinary.Memory.firstValue.value & CalcBinary.Memory.secondValue.value;
	}
	else if (CalcBinary.Memory.operation.value == "|") {
		val = CalcBinary.Memory.firstValue.value | CalcBinary.Memory.secondValue.value;
	}
	else if (CalcBinary.Memory.operation.value == "+") {
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
	console.log("do calculation val: " + val);
	return val;
},

button0Handler : function() {
	CalcBinary.View.textRow.value = CalcBinary.addToNumber("0");
	document.getElementById("textRowBinary").value = CalcBinary.View.textRow.value;
},

button1Handler : function() {
	CalcBinary.View.textRow.value = CalcBinary.addToNumber("1");
	document.getElementById("textRowBinary").value = CalcBinary.View.textRow.value;	
},

buttonTildeHandler : function() {
	
},

buttonAddHandler : function() {
	CalcBinary.Memory.secondValue.value = CalcBinary.Memory.currentValue.value;
	CalcBinary.Memory.operation.value = "+";
	CalcBinary.View.textRow.value = "";
	CalcBinary.Memory.currentValue.reset();
	document.getElementById("textRowBinary").value = Calc.View.textRow.value;
},

buttonPercentHandler : function() {
	
},

buttonShiftLeftHandler : function() {
	
},

buttonShiftRightHandler : function() {
	
},
	
buttonSubtractHandler : function() {
	CalcBinary.Memory.secondValue.value = CalcBinary.Memory.currentValue.value;
	CalcBinary.Memory.operation.value = "-";
	CalcBinary.View.textRow.value = "";
	CalcBinary.Memory.currentValue.reset();
	document.getElementById("textRowBinary").value = Calc.View.textRow.value;
},

buttonAmpersandHandler : function() {
	CalcBinary.Memory.secondValue.value = CalcBinary.Memory.currentValue.value;
	CalcBinary.Memory.operation.value = "&";
	CalcBinary.View.textRow.value = "";
	CalcBinary.Memory.currentValue.reset();
	document.getElementById("textRowBinary").value = Calc.View.textRow.value;
},

buttonPipeHandler : function() {
	CalcBinary.Memory.secondValue.value = CalcBinary.Memory.currentValue.value;
	CalcBinary.Memory.operation.value = "|";
	CalcBinary.View.textRow.value = "";
	CalcBinary.Memory.currentValue.reset();
	document.getElementById("textRowBinary").value = Calc.View.textRow.value;	
},

buttonMultiplyHandler : function() {
	CalcBinary.Memory.secondValue.value = CalcBinary.Memory.currentValue.value;
	CalcBinary.Memory.operation.value = "*";
	CalcBinary.View.textRow.value = "";
	CalcBinary.Memory.currentValue.reset();
	document.getElementById("textRowBinary").value = Calc.View.textRow.value;
},

buttonDivideHandler : function() {
	CalcBinary.Memory.secondValue.value = CalcBinary.Memory.currentValue.value;
	CalcBinary.Memory.operation.value = "/";
	CalcBinary.View.textRow.value = "";
	CalcBinary.Memory.currentValue.reset();
	document.getElementById("textRowBinary").value = Calc.View.textRow.value;
},

buttonMRHandler : function() {
	CalcBinary.View.textRow.value = CalcBinary.Memory.memoryValue.value.toString(2);
	CalcBinary.Memory.currentValue.value = CalcBinary.Memory.memoryValue.value;
	document.getElementById("textRowBinary").value = CalcBinary.View.textRow.value;
},

buttonMminusHandler : function() {
	CalcBinary.Memory.memoryValue.value = CalcBinary.Memory.memoryValue.value - CalcBinary.Memory.currentValue.value;
},

buttonMplusHandler : function() {
	CalcBinary.Memory.memoryValue.value = CalcBinary.Memory.memoryValue.value + CalcBinary.Memory.currentValue.value;
},

buttonCHandler : function() {
	CalcBinary.View.textRow.value = "";
    CalcBinary.Memory.currentValue.reset();
    document.getElementById("textRowBinary").value = CalcBinary.View.textRow.value;
},	

buttonMCHandler : function() {
	CalcBinary.Memory.memoryValue.value = 0;
},

buttonEqualsHandler : function() {
    CalcBinary.Memory.firstValue.value = CalcBinary.Memory.secondValue.value;
    CalcBinary.Memory.secondValue.value = CalcBinary.Memory.currentValue.value;
	var num = CalcBinary.doCalculation();
	CalcBinary.Memory.secondValue.value = num;
	CalcBinary.Memory.currentValue.string = num.toString(2);
	CalcBinary.Memory.currentValue.value = num;
    CalcBinary.View.textRow.value = CalcBinary.Memory.currentValue.string;
    document.getElementById("textRowBinary").value = CalcBinary.View.textRow.value;
},


} // end of CalcBinary;
