var AES = CryptoJS.AES;

const encryptedUrl = "U2FsdGVkX1/JVDLztyhFtQmHU5UDFJJgZQ5ih/AXfF1fKuLVVGx5avuHaI6IcpiWPKWu3BvlZXrAc6UgRBOG3an5MWCWPh9Ve1xXDFY9jB7a54CUGXur5wW+EpuViP4E5FdfS5Z8GNVmSghy1DzED1lXR1kBd+fvOGPIIdrHcNg=";

$("#password-input").change(()=>{
    const code = $("#password-input").val();
    const url = AES.decrypt(encryptedUrl, code).toString(CryptoJS.enc.Utf8);

    if(url.substring(0,8) === "https://"){
        window.location.href = url;
    } else {
        alert("Sorry, that is not correct!");
    }
});