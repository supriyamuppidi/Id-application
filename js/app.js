var valid = 1;
function addDetails() {
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
    if (!validateReasonsForEmailid())
        displayErrorMessageForEmailid();
    if (!validateReasonsForEmployeeContactNumber())
        displayErrorMessageForEmployeeContactNumber();
    if (!validateReasonsForEmergencyContactNumber())
        displayErrorMessageForEmergencyContactNumber();


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
    $('#employeeContactNumber').css("border", "solid 1px red");
    $('#erroremployeeContactNumber').show();
}
function displayErrorMessageForEmergencyContactNumber(){
    $('#emergencycontactnumber').css("border", "solid 1px red");
    $('#erroremergencycontactnumber').show();
}
function displayErrorMessageForBloodGroup(){
    $('#bloodgroup').css("border", "solid 1px red");
    $('#errorbloodgroup').show();
}
function displayErrorMessageForEmailid(){
    $('#emailid').css("border", "solid 1px red");
    $('#erroremailid').show();
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
    return true;
}
function validateReasonsForEmergencyContactNumber(){
    const contactnumber = $('#emergencycontactnumber').val();
    if (contactnumber == "" ) {
        return false;
    }
    return true;
}
function validateBloodGroup(){
    const bloodgroup = $('#bloodgroup').val();
    if (bloodgroup == "" ) {
        return false;
    }
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
function checkEmail(){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const emailid = $('#emailid').val();
    if (reg.test(emailid) == false) 
    {
        alert('Invalid Email Address');
        return (false);
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
    $.ajax({
        type: 'POST',
        url: 'https://id-pplication-form.firebaseio.com/priya.json',
        data: JSON.stringify(data),
        success: onPostsuccess,
    })
}

$('document').ready(() => {
    $('.span-for-errors').hide();
})