let display = document.getElementBYID("display");
function appendValue(value) {
  dispaly.value += value;
}
 function clearDisplay() {
   display.value = "" ;
 }
   function deleteLast() {
     dispaly.value = diaplay.value.slice(0, -1);
   }
    function calculate() {
      try {
        display.value= eval(dispaly.value);
      } catch {
        display.value = "Error";
      }
    }
