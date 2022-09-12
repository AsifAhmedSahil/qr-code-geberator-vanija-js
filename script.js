const qrFormElement = document.getElementById("qr_form");

qrFormElement.addEventListener("submit",(event)=>{
    event.preventDefault();

    const formData = new FormData(qrFormElement);
    const text = formData.get("qrText")

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`

    console.log(text)


})