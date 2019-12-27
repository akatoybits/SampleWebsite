const input = document.getElementById("myfile")
input.addEventListener('change', function(e){
    console.log(input.files)
    const reader = new FileReader()
    reader.onload = function(){
        document.getElementById("teks").value = reader.result;
        console.log(reader.result);
    }
    reader.readAsText(input.files[0])
   
}, false)
                                                                        