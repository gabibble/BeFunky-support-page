// displaying credit card info only for refund form
const urlParams = new URLSearchParams(window.location.search);
const formType = urlParams.get("formType");
let refundInputs = document.querySelector("#refund-inputs");

if (formType == "refund") {
  refundInputs.style.display = "block";
  refundInputs.innerHTML = `<label for="cardinfo"
            >What are the last 4 digits and expiration date of the credit
            card?*</label
          >
          <div class="card-inputs">
            <input
              type="password"
              id="last-four"
              placeholder="****"
              name="last-four"
              pattern="[0-9]{4}"
              required
            />
            <input
              type="text"
              id="expiration"
              placeholder="MM/YY"
              name="expiration"
              pattern="[0-1]{1}[0-9]{1}/[0-9]{2}"
              required
            />
          </div>
          <label for="charge-date"
            >What is the date of your last charge?*</label
          >
          <input type="text" id="charge-date" name="chargeDate" />`;
}

//displays uploaded file names

let uploadFile = document.querySelector("#upload");
let fileChosen = document.querySelector("#file-chosen");

uploadFile.addEventListener("change", () => {
  let filesAdded = "";
  for (let i = 0; i < uploadFile.files.length; i++) {
    filesAdded += `<p>${upload.files[0].name} added</p>`;
  }
  fileChosen.innerHTML = filesAdded;
});

//dispays sumbitted info in console and shows submission message 

let form = document.querySelector("#support-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(event.target);
  let userInput = Object.fromEntries(data.entries());
  console.log(userInput);
  let reload = formType == "refund" ? "form.html?formType=refund" : "form.html";
  form.innerHTML = `<div id="submitted">
            <p>Thank you, your request has been submitted! We'll be in touch soon.</p>
            <a href="${reload}">Submit another request</a>
        </div>`;
});
