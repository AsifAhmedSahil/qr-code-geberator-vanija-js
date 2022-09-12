const qrFormElement = document.getElementById("qr_form");
const qrContainer = document.getElementById("qrContainer");
const qrImage = document.getElementById("qrImage");
const inputTextEL = document.getElementById("inputText");

const renderQRCode = (url) =>{
    if(!url) return;

    qrImage.src = url;
    qrContainer.classList.add("show");
}

qrFormElement.addEventListener("submit",(event)=>{
    event.preventDefault();

    const formData = new FormData(qrFormElement);
    const text = formData.get("qrText")

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`

    // console.log(text)

    renderQRCode(qrCodeUrl);

})

inputTextEL.addEventListener("Keyup",()=>{
    
    if(!inputTextEL.value.trim()){
        qrContainer.classList.remove("show")
    }

})