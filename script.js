




async function get_data(){
    var res = await fetch("https://dog.ceo/api/breeds/image/random");
    var final_res = await res.json();
    console.log(final_res);
    value_data(final_res);
}

get_data()


function value_data(final_res){
    
        var ele = document.createElement("div");
        ele.className="main"
        
        ele.innerHTML=
       
        `<img src=${final_res.message} class="image-fluid" width = 500px  height = 500px alt=${`disney`}>`
     
      document.body.append(ele);
    }


    
    


