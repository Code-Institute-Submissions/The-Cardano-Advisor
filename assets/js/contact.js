function sendMail(contactForm) {
    emailjs.send("gmail", "cardano", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "advice_request": contactForm.requests.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return true;
}
/* This function is used for the automatic emailing of the contact form using EmailJS*/