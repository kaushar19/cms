 // Global Declaration for PL
var varId = document.getElementById("txtId");
var varName = document.getElementById("txtName");
var varAddress = document.getElementById("txtAddress");
var varMobileNo = document.getElementById("txtMobileNo");
var varDiv = document.getElementById("divCustomer");

//PL Code
function addCustomer_Click() {
  var id = parseInt(varId.value);
  var name = varName.value;
  var address = varAddress.value;
  var mobileNo = varMobileNo.value;
  addCustomer(id, name, address, mobileNo);
  alert("Customer Added Successfully !");
  var data = getAllCustomerInTableFormat();
  varDiv.innerHTML = data;
}

function clear_screen() {
  varId.value = "";
  varName.value = "";
  varAddress.value = "";
  varMobileNo.value = "";
}

function searchCustomer_Click() {
  var id = varId.value;
  var obj = searchCustomer(id);
  if (obj) {
    // varId.value=obj.id;
    // varAddress.value=obj.address;
    // varMobileNo.value=obj.mobileNo;
    alert(`ID:   ${obj.id} 
              Name:   ${obj.name} 
           Address:   ${obj.address} 
         Mobile No:   ${obj.mobileNo}`);
  } else {
    alert("Customer Not Found");
  }
}

function deleteCustomer_Click() {
  var id = parseInt(varId.value);
  var obj = deleteCustomer(id);
  if (obj) {
    var data = getAllCustomerInTableFormat();
    varDiv.innerHTML = data;
  } else {
    alert("ID Not Found");
  }
}

function modifyCustomer_Click() {
  alert("Currently Function Not Work");
}

//Global Declaration for BLL
var cusArr = [];

//BLL Code
function addCustomer(id, name, address, mobileNo) {
  var cus = { id: id, name: name, address: address, mobileNo: mobileNo };
  cusArr.push(cus);
}

function getAllCustomerInTableFormat() {
  var data = `<table class="table table-hover table-striped table-light">
    <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>ADDRESS</th>
        <th>MOBILE NO</th>
    </tr> `;

  for (var i = 0; i < cusArr.length; i++) {
    var e = cusArr[i];
    data += `<tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.address}</td>
        <td>${e.mobileNo}</td>
    </tr>`;
  }

  data += `</table>`;
  return data;
}

function searchCustomer(id) {
  function matchCustomerOnbasisOfId(cus) {
    return cus.id == id;
  }
  var obj = cusArr.find(matchCustomerOnbasisOfId);
  return obj;
}

function deleteCustomer(id) {
  function matchCustomerOnbasisOfid(cus) {
    return cus.id == id;
  }
  var arrindex = cusArr.findIndex(matchCustomerOnbasisOfid);
  if (arrindex != -1) {
    cusArr.splice(arrindex, 1);
    return true;
  } else {
    return false;
  }
}
