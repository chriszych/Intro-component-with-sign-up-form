document.querySelector(".claimTrial").addEventListener("click", checkForm);

let formFieldsCollection = document.querySelectorAll(".formField");

formFieldsCollection.forEach(element => {
    element.addEventListener("click", clearFormError);
});


function checkForm(){

    formFieldsCollection.forEach(element => {

        let tmpValue = element.placeholder;

        element.classList.remove("formWrongContent");
        element.placeholder = tmpValue;

        if (element.value == element.defaultValue) {
            element.nextSibling.innerHTML = tmpValue + " cannot be empty";
            element.classList.add("formWrongContent");
            element.placeholder = "";
        }   
    });

    let emailToCheck = document.querySelector("#emailAddress");
    let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ((emailToCheck.value != '') && (!emailRegEx.test(emailToCheck.value))) {
        emailToCheck.nextSibling.innerHTML = "Looks like this is not an email";
        emailToCheck.classList.add("formWrongContent");
      }
}

function clearFormError(){

    this.nextSibling.innerHTML = "";
    this.classList.remove("formWrongContent");
}