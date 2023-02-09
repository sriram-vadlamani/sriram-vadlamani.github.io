GPT_api = {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    test_mode: 0,
    get_response: function(data){

        document.getElementById("wait_for_api").style.display = "block"

        if( this.test_mode == 1){
            return this.test_data();
        }
        const options = {
            method: this.method,
            body: JSON.stringify(data),
            headers: this.headers
        };

        fetch("http://tmapsbuilder1.rc.prod:8800/", options)
        .then((response) => response.json())
        .then((data) => {            
            document.getElementById("wait_for_api").style.display = "none"
            Response.display(data['response'])
        })
        .catch((err) => {
            alert("Problème avec fetch : " + err.message);
        });
    },
    test_data: function(){
        setTimeout(this.display_test_data, 3000)
        
    },
    display_test_data: function(){
        document.getElementById("wait_for_api").style.display = "none"        
        Response.display("Nous sommes désolés");
    }
}
