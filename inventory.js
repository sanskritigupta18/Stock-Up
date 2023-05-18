function addStudent() {
  var rollno = document.sample.rollno.value;

  var name = document.sample.name.value;

  var tr = document.createElement("tr");

  var td1 = tr.appendChild(document.createElement("td"));

  var td2 = tr.appendChild(document.createElement("td"));

  var td3 = tr.appendChild(document.createElement("td"));

  var td4 = tr.appendChild(document.createElement("td"));

  td1.innerHTML = rollno;

  td2.innerHTML = name;

  td3.innerHTML =
    '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';

  td4.innerHTML =
    '<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">';

  document.getElementById("tbl").appendChild(tr);
}

function UpStud(stud) {
  var rollno = document.sample.rollno.value;

  var name = document.sample.name.value;

  var s = stud.parentNode.parentNode;

  var tr = document.createElement("tr");

  var td1 = tr.appendChild(document.createElement("td"));

  var td2 = tr.appendChild(document.createElement("td"));

  var td3 = tr.appendChild(document.createElement("td"));

  var td4 = tr.appendChild(document.createElement("td"));

  td1.innerHTML = '<input type="number" name="rollno1">';

  td2.innerHTML = '<input type="text" name="name1">';

  td3.innerHTML =
    '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';

  td4.innerHTML =
    '<input type="button" name="up" value="Update" onclick="addUpStud(this);" class="btn btn-primary">';

  document.getElementById("tbl").replaceChild(tr, s);
}

function addUpStud(stud) {
  var rollno = document.sample.rollno1.value;

  var name = document.sample.name1.value;

  var s = stud.parentNode.parentNode;

  var tr = document.createElement("tr");

  var td1 = tr.appendChild(document.createElement("td"));

  var td2 = tr.appendChild(document.createElement("td"));

  var td3 = tr.appendChild(document.createElement("td"));

  var td4 = tr.appendChild(document.createElement("td"));

  td1.innerHTML = rollno;

  td2.innerHTML = name;

  td3.innerHTML =
    '<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">';

  td4.innerHTML =
    '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';

  document.getElementById("tbl").replaceChild(tr, s);
}

function delStudent(Stud) {
  var s = Stud.parentNode.parentNode;

  s.parentNode.removeChild(s);
}
// var button = document.getElementById("button");
// var makepdf = document.getElementById("makepdf");

//     function printData() {
//       const printableContent = document.getElementById("printableContent").innerHTML;
//       const printWindow = window.open("", "_blank");
//       printWindow.document.open();
//       printWindow.document.write('<html><head><title>Print Data</title></head><body>' + printableContent + '</body></html>');
//       printWindow.document.close();
//       printWindow.print();
//     }
function printAndSavePDF() {
  const element = document.getElementById("printableContent");
  const opt = {
    filename: "inventory.pdf",
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  };

  html2pdf().set(opt).from(element).save();
}