var valid = 0;
function addDetails()
{
    valid = 0;
    $("span").hide();
    var validate = validateDetails();
    if(validate)
    {
        postData();
    }
}
function validateDetails() {
    console.log("button clicked");
    if (!validateFirstname())
        displayErrorMessageForFirstname();
    if (!validateFullname())
        displayErrorMessageForFullname();
    if (!validateDesignation())
        displayErrorMessageForDesigantion();
    if (!validateEmployeecode())
        displayErrorMessageForEmployeecode();
    if (!validateBloodGroup())
        displayErrorMessageForBloodGroup();
    if (!validateReasonsForIssue())
        displayErrorMessageForReasonsForIssue();
    /*if (!validateDate())
        displayErrorMessageForDate();*/
    if (!validateReasonsForEmailid())
        displayErrorMessageForEmailid();
    if (!validateReasonsForEmployeeContactNumber())
        displayErrorMessageForEmployeeContactNumber();
    if (!validateReasonsForEmergencyContactNumber())
        displayErrorMessageForEmergencyContactNumber();

        if(valid == 0)
        {
            return true;
        }
        return false;
}
function displayErrorMessageForFirstname() {
    valid++;
    $('#firstname').css("border", "solid 1px red");
    $('#errorfirstname').show();
}
function displayErrorMessageForFullname() {
    valid++;
    $('#fullname').css("border", "solid 1px red");
    $('#errorfullname').show();
}
function displayErrorMessageForDesigantion() {
    valid++;
    $('#designation').css("border", "solid 1px red");
    $('#errordesignation').show();
}
function displayErrorMessageForEmployeecode() {
    valid++;
    $('#employeecode').css("border", "solid 1px red");
    $('#erroremployeecode').show();
}
function displayErrorMessageForReasonsForIssue() {
    valid++;
    $('#reasonsforissue').css("color", "solid 1px red");
    $('#errorreasonsforissue').show();
}
function displayErrorMessageForEmployeeContactNumber(){
    valid++;
    $('#employeeContactNumber').css("border", "solid 1px red");
    $('#erroremployeeContactNumber').show();
}
function displayErrorMessageForEmergencyContactNumber(){
    valid++;
    $('#emergencycontactnumber').css("border", "solid 1px red");
    $('#erroremergencycontactnumber').show();
}
function displayErrorMessageForBloodGroup(){
    valid++;
    $('#bloodgroup').css("border", "solid 1px red");
    $('#errorbloodgroup').show();
}
function displayErrorMessageForEmailid(){
    valid++;
    $('#emailid').css("border", "solid 1px red");
    $('#erroremailid').show();
}
function displayErrorMessageForDate(){
    valid++;
    $('#dateofemployment').css("border", "solid 1px red");
    $('#errordateofemployment').show();
}

function validateFirstname() {
    const firstname = $('#firstname').val();
    if (firstname === "") {
        return false;
    }
    return true;
}
function validateFullname() {
    const fullname = $('#fullname').val();
    if (fullname === "") {
        return false;
    }
    return true;
}
function validateDesignation() {

    const designation = $('#designation').val();
    if (designation == "default") {
        return false;
    }
    return true;
}
function validateEmployeecode() {
    const employeecode = $('#employeecode').val();
    if (employeecode === "") {
        return false;
    }
    return true;
}
function validateReasonsForIssue() {
    if ($('input[name=reasonsforissue]:checked').length <= 0) {
        return false;
    }
    return true;
}
function validateReasonsForEmployeeContactNumber() {
    const contactnumber = $('#employeeContactNumber').val();
    if (contactnumber == "" ) {
        return false;
    }
    if(contactnumber.length<10) {
        alert('Please enter valid contact number that consists of 10 digits');
    }
        
    return true;
}
function validateReasonsForEmergencyContactNumber(){
    const contactnumber = $('#emergencycontactnumber').val();
    if (contactnumber == "" ) {
        return false;
    }
     if(contactnumber.length<10) {
        alert('Please enter valid contact number that consists of 10 digits');
    }
    return true;
}
function validateBloodGroup(){
    const bloodgroup = $('#bloodgroup').val();
    if (bloodgroup == "" ) {
        return false;
    }
    checkBloodGroup();
    return true;
}
function validateReasonsForEmailid(){
    const emailid = $('#emailid').val();
    if (emailid == "" ) {
        return false;
    }
    checkEmail();        
    return true;
}
function validateDate() {
    const date = $('#dateofemployment').val();
    if (dateofemployment == "") 
    {
        return false;
    }
}
function checkEmail(){
    const reg = /^([A-Za-z0-9_\-\.])+\@virtusa+\.([A-Za-z]{2,4})$/;
    const emailid = $('#emailid').val();
    if (reg.test(emailid) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }
 }
function checkBloodGroup(){
    const reg = /^(A|B|AB|O)[-+]$/;
    const bloodgroup = $('#bloodgroup ').val();
    if (reg.test(bloodgroup ) == false) 
    {
        alert('Invalid blood group');
        return false;
    }
 }

function phoneno(event) {
    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function postData() {
    console.log("Finally inside posting the data");
    const firstName = $("#firstname").val();
    const fullName = $("#fullname").val();
    const designation = $('#designation').val();
    const employeecode = $('#employeecode').val();
    const reasonsforissue = $('input[name=reasonsforissue]:checked').val();
    const contactnumber = $('#employeeContactNumber').val();
    const bloodgroup = $('#bloodgroup').val();
    const contactnumber1 = $('#emergencycontactnumber').val();
    const emailid = $('#emailid').val();
    const date = $('#dateofemployment').val();

    const formDetails = {
        "firstName" : firstName,
        "fullName" : fullName,
        "designation" : designation,
        "employeecode" : employeecode,
        "reasonsforissue" : reasonsforissue,
        "contactnumber" : contactnumber,
        "contactnumber1" : contactnumber1,
        "bloodgroup" : bloodgroup,
        "emailid" : emailid,
        "date" : date
    }
    const data = JSON.stringify(formDetails);
    console.log(data);
    $.ajax({
        type: "POST",
        url: "https://id-pplication-form.firebaseio.com/application.json",
        data: data,
        success : function(data)
        {
            console.log("In success");
        },
        error : function(err)
        {
            console.log(err);
        }
      });
}

$('document').ready(() => {
    $('.span-for-errors').hide();
})
