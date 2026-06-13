function openFile(inputId, correctPassword, filePath){
    const pass = document.getElementById(inputId).value;

    if(pass === correctPassword){
        window.open(filePath, "_blank");
    } else {
        alert("كلمة المرور غير صحيحة");
    }
}