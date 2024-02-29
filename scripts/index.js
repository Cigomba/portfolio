function removeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    console.log('modal removed');
}

function createModal() {
    console.log("creating modal..");
    // <!-- Contact Modal -->
    <div class="container modal u-max-full-width br">
        <a id="remove-btn" onClick="removeModal"> <X /></a>
        <div class='modal-content half-column'>
        <h4><a>Cigomba.tech</a></h4>
        <h2>
          <b>
          Get in touch with me
          </b>
          </h2>
        <p>I love using software and hardware to develop new ideas.
        Please contact me for job or work opportunities as well as collaborations. Thank you.</p>
        <form class='u-full-width' action='post'>
              <label htmlFor="emailInput">Your email</label>
              <input type="email" id='emailInput' class='u-full-width' placeholder='example@mailbox.com' />
              <label htmlFor="message">Message</label>
              <textarea name="" id="message" placeholder='Your message here...' ></textarea>
              <button type='button' class='btn' onClick="submitForm">Submit</button>
        </form>
        </div>
        </div>
}

const modal = document.querySelector("#modal");

function showContact() {
    if (modal) {
        modal.style.display = none;
    } else {
        
    const body = document.querySelector("body");
        
    // container
    const container_div = document.createElement('div');
    container_div.id = "modal";
    container_div.classList.add("container", "u-max-full-width");
    // row
    const row_div = document.createElement("div");
    row_div.classList.add("container");
    
    // add row to container
    container_div.appendChild(row_div);
    
    // column
    const column = document.createElement("div");
    
    // add modal to row 
    row_div.appendChild(column);

    // create anchor element for remove button
    const a = document.createElement('a');
    a.innerHTML("X");
    a.id = "remove-btn";
    a.onclick = () => {
        modal.style.display=none;
    }

    const model_content = document.createElement(div);
    model_content.classList.add("half-column");
    
        <div class='modal-content half-column'>
        <h4><a>Cigomba.tech</a></h4>
        <h2>
          <b>
          Get in touch with me
          </b>
          </h2>
        <p>I love using software and hardware to develop new ideas.
        Please contact me for job or work opportunities as well as collaborations. Thank you.</p>
        <form class='u-full-width' action='post'>
              <label htmlFor="emailInput">Your email</label>
              <input type="email" id='emailInput' class='u-full-width' placeholder='example@mailbox.com' />
              <label htmlFor="message">Message</label>
              <textarea name="" id="message" placeholder='Your message here...' ></textarea>
              <button type='button' class='btn' onClick="submitForm">Submit</button>
        </form>
        </div>

}

window.onclose(() => {
    document.querySelector("#modal").remove();
})
}