// CALCULATOR.JS
//
//
//

// 
var Calc = {

Model : {
},


View : {
  textRow : {id: "textRow", type: "text", value: "", onclick:""},
  buttonAdd : {id: "buttonAdd", type: "button", value: "+", onclick:""},
  buttonSubtract : {id: "buttonSubtract", type: "button", value: "-", onclick:""},
  buttonMultiply : {id: "buttonMultiply", type: "button", value: "*", onclick:""},
  buttonDivide : {id: "buttonDivide", type: "button", value: "/", onclick:""},
  buttonDecimal : {id: "buttonDecimal", type: "button", value: ".", onclick:""},
  buttonEquals : {id: "buttonEquals", type: "button", value: "=", onclick:""},
  buttonC : {id: "buttonC", type: "button", value: "C", onclick:""},
  buttonMR : {id: "buttonMR", type: "button", value: "MR", onclick:""},
  buttonMminus : {id: "buttonMminus", type: "button", value: "M-", onclick:""},
  buttonMplus : {id: "buttonMplus", type: "button", value: "M+", onclick:""},
  buttonMC : {id: "buttonMC", type: "button", value: "MC", onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  button2 : {id: "button2", type: "button", value: 2, onclick:""},
  button3 : {id: "button3", type: "button", value: 3, onclick:""},
  button4 : {id: "button4", type: "button", value: 4, onclick:""},
  button5 : {id: "button5", type: "button", value: 5, onclick:""},
  button6 : {id: "button6", type: "button", value: 6, onclick:""},
  button7 : {id: "button7", type: "button", value: 7, onclick:""},
  button8 : {id: "button8", type: "button", value: 8, onclick:""},
  button9 : {id: "button9", type: "button", value: 9, onclick:""}
},

Memory : {
  memoryValue : {value: 0, reset:function(){this.value=0;}},
  firstValue : {value: ""},
  secondValue : {value: ""},
  operation : {value: ""},
  currentValue : {value: 0, 
	  			  firstHalf: 0, 
	  			  secondHalf: 0, 
	  			  hasDecimal: false, 
	  			  reset:function() {
	  				  this.value=0; 
	  				  this.firstHalf=0; 
	  				  this.secondHalf=0; 
	  				  this.hasDecimal=false;}},
  clear: function() {
	  this.firstValue.value=""; 
	  this.secondValue.value="";
	  this.operation.value=""; 
	  this.currentValue.reset();}
},

Controller : {

},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
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
  s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button7);
  s += Calc.displayElement(Calc.View.button8);
  s += Calc.displayElement(Calc.View.button9);
  s += Calc.displayElement(Calc.View.buttonAdd);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button4);
  s += Calc.displayElement(Calc.View.button5);
  s += Calc.displayElement(Calc.View.button6);
  s += Calc.displayElement(Calc.View.buttonSubtract);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button1);
  s += Calc.displayElement(Calc.View.button2);
  s += Calc.displayElement(Calc.View.button3);
  s += Calc.displayElement(Calc.View.buttonMultiply);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button0);
  s += Calc.displayElement(Calc.View.buttonDecimal);
  s += Calc.displayElement(Calc.View.buttonEquals);
  s += Calc.displayElement(Calc.View.buttonDivide);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonC);
  s += Calc.displayElement(Calc.View.buttonMR);
  s += Calc.displayElement(Calc.View.buttonMminus);
  s += Calc.displayElement(Calc.View.buttonMplus);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonMC);
  s += "</tr></td></table>";
  return s;
},

addToNumber : function(newNum) {
	if (Calc.Memory.currentValue.hasDecimal) {
		Calc.Memory.currentValue.secondHalf = ( Calc.Memory.currentValue.secondHalf * 10 ) + newNum;
		Calc.Memory.currentValue.value = Calc.Memory.currentValue.firstHalf + "." + Calc.Memory.currentValue.secondHalf;
		console.log("Calc.Memory.currentValue.value: " + Calc.Memory.currentValue.value);
		return Calc.Memory.currentValue.value;
	}
	else {
		Calc.Memory.currentValue.firstHalf = ( Calc.Memory.currentValue.firstHalf * 10 ) + newNum;
		Calc.Memory.currentValue.value = Calc.Memory.currentValue.firstHalf;
		return Calc.Memory.currentValue.value;
	}
	
},

doCalcuation : function() {
	var val;
	
	if (Calc.Memory.operation.value == "") {
		Calc.Memory.operation.value = "+";
	}

	console.log("calculating: " + Calc.Memory.firstValue.value + Calc.Memory.operation.value + Calc.Memory.secondValue.value);
	
	if (Calc.Memory.operation.value == "+") {
		val = Calc.Memory.firstValue.value + Calc.Memory.secondValue.value;
	}
	else if (Calc.Memory.operation.value == "-") {
		val = Calc.Memory.firstValue.value - Calc.Memory.secondValue.value;
	}
	else if (Calc.Memory.operation.value == "*") {
		val = Calc.Memory.firstValue.value * Calc.Memory.secondValue.value;
	}
	else if (Calc.Memory.operation.value == "/") {
		val = Calc.Memory.firstValue.value / Calc.Memory.secondValue.value;
	}
	return val;
},

attachHandlers : function() {
  Calc.View.buttonAdd.onclick = "Calc.buttonAddHandler()";
  Calc.View.buttonSubtract.onclick = "Calc.buttonSubtractHandler()";
  Calc.View.buttonMultiply.onclick = "Calc.buttonMultiplyHandler()";
  Calc.View.buttonDivide.onclick = "Calc.buttonDivideHandler()";
  Calc.View.buttonDecimal.onclick = "Calc.buttonDecimalHandler()";
  Calc.View.buttonEquals.onclick = "Calc.buttonEqualsHandler()";
  Calc.View.buttonC.onclick = "Calc.buttonCHandler()";
  Calc.View.buttonMR.onclick = "Calc.buttonMRHandler()";
  Calc.View.buttonMminus.onclick = "Calc.buttonMminusHandler()";
  Calc.View.buttonMplus.onclick = "Calc.buttonMplusHandler()";
  Calc.View.buttonMC.onclick = "Calc.buttonMCHandler()";
  Calc.View.button0.onclick = "Calc.button0Handler()";
  Calc.View.button1.onclick = "Calc.button1Handler()";
  Calc.View.button2.onclick = "Calc.button2Handler()";
  Calc.View.button3.onclick = "Calc.button3Handler()";
  Calc.View.button4.onclick = "Calc.button4Handler()";
  Calc.View.button5.onclick = "Calc.button5Handler()";
  Calc.View.button6.onclick = "Calc.button6Handler()";
  Calc.View.button7.onclick = "Calc.button7Handler()";
  Calc.View.button8.onclick = "Calc.button8Handler()";
  Calc.View.button9.onclick = "Calc.button9Handler()";
},

buttonAddHandler : function() {
  Calc.Memory.secondValue.value = Calc.Memory.currentValue.value;
  Calc.Memory.operation.value = "+";
  Calc.View.textRow.value = "";
  Calc.Memory.currentValue.reset();
  document.getElementById("textRow").value = Calc.View.textRow.value;
},
	
buttonSubtractHandler : function() {
  Calc.Memory.secondValue.value = Calc.Memory.currentValue.value;
  Calc.Memory.operation.value = "-";
  Calc.View.textRow.value = "";
  Calc.Memory.currentValue.reset();
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

buttonMultiplyHandler : function() {
  Calc.Memory.secondValue.value = Calc.Memory.currentValue.value;
  Calc.Memory.operation.value = "*";
  Calc.View.textRow.value = "";
  Calc.Memory.currentValue.reset();
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

buttonDivideHandler : function() {
  Calc.Memory.secondValue.value = Calc.Memory.currentValue.value;
  Calc.Memory.operation.value = "/";
  Calc.View.textRow.value = "";
  Calc.Memory.currentValue.reset();
  document.getElementById("textRow").value = Calc.View.textRow.value;
},
	
buttonDecimalHandler : function() {
  if (!(Calc.Memory.currentValue.hasDecimal)) {
	 Calc.Memory.currentValue.hasDecimal = true; 
	 Calc.View.textRow.value += ".";
  }
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

buttonEqualsHandler : function() {
  Calc.Memory.firstValue.value = Calc.Memory.secondValue.value;
  Calc.Memory.secondValue.value = Calc.Memory.currentValue.value;
  var num = Calc.doCalcuation();
  Calc.Memory.secondValue.value = num;
  Calc.View.textRow.value = num;
  //Calc.Memory.currentValue.reset();
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

buttonCHandler : function() {
  Calc.View.textRow.value = "";
  //Calc.Memory.clear();
  Calc.Memory.currentValue.reset();
  document.getElementById("textRow").value = Calc.View.textRow.value;
},
			
buttonMRHandler : function() {
  Calc.View.textRow.value = Calc.Memory.memoryValue.value;
  //Calc.Memory.currentValue.value = TODO does this need to update current value?
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

buttonMminusHandler : function() {
  Calc.Memory.memoryValue.value = Calc.Memory.memoryValue.value - Calc.Memory.currentValue.value;
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

buttonMplusHandler : function() {
  Calc.Memory.memoryValue.value = Calc.Memory.memoryValue.value + Calc.Memory.currentValue.value;
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

buttonMCHandler : function() {
  Calc.Memory.memoryValue.reset();
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

button0Handler : function() {
  Calc.View.textRow.value = Calc.addToNumber(0)
  document.getElementById("textRow").value = Calc.View.textRow.value;
},
	
button1Handler : function() {
  Calc.View.textRow.value = Calc.addToNumber(1)
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

button2Handler : function() {
  Calc.View.textRow.value = Calc.addToNumber(2)
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

button3Handler : function() {
  Calc.View.textRow.value = Calc.addToNumber(3)
  document.getElementById("textRow").value = Calc.View.textRow.value;
},
	
button4Handler : function() {
  Calc.View.textRow.value = Calc.addToNumber(4)
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

button5Handler : function() {
  Calc.View.textRow.value = Calc.addToNumber(5)
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

button6Handler : function() {
  Calc.View.textRow.value = Calc.addToNumber(6)
  document.getElementById("textRow").value = Calc.View.textRow.value;
},
			
button7Handler : function() {
  Calc.View.textRow.value = Calc.addToNumber(7)
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

button8Handler : function() {
  Calc.View.textRow.value = Calc.addToNumber(8)
  document.getElementById("textRow").value = Calc.View.textRow.value;
},

button9Handler : function() {
  Calc.View.textRow.value = Calc.addToNumber(9)
  document.getElementById("textRow").value = Calc.View.textRow.value;
}

} // end of Calc;
