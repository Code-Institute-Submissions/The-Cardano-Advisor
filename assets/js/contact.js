function sendMail(contactForm) {
/* This function is used for the automatic emailing of the contact form using EmailJS*/
    emailjs.send("gmail", "cardano", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "advice_request": contactForm.requests.value
    })
    .then(
        function(response) {
            alert('Email sent! we will be with you shortly! <(^^,)>', response);
        },
        function(error) {
            alert('OOPS something went wrong. Please try again', error);
        }
    );
    return false;
}