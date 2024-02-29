function submitForm() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    if (message = "") {
        
    } 
    else {
        const serviceID = "service_1lyeejp";
        const templateID = "template_gsfxw7s";
        
        emailjs.send(serviceID, templateID, params)
        .then(response => {
            const doneMessage = document.createElement("p");
            doneMessage.innerText = "Sent. Thank you";
            
            document.querySelector("#submit_btn").parentNode.appendChild(doneMessage);
            console.log("sent successfully!");
            console.log(response);
        }).catch(error => {
            console.log(error); 
        })
    }
}