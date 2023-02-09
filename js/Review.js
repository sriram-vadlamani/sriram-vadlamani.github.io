let Review = {
    display: function(event) {
        idx = event.target.value;
    
        document.getElementById("customer-review").style.display = "block";
        document.getElementById("customer-rating").style.display = "block";
        document.getElementById("button-first_response").style.display = "block";
    
        document.getElementById("review_author").innerHTML = reviews[idx]['review_author'];
        document.getElementById("avis").innerHTML = reviews[idx]['review'];
        document.getElementById("rating").innerHTML = reviews[idx]['rating'];
    
        document.getElementById("response_author").innerHTML = reviews[idx]['response_author'];
        document.getElementById("establishment_name").innerHTML = reviews[idx]['establishment_name'];
    },
    dropdown: function() {
        const sel = document.getElementById("review_select")
        for (idx = 0; idx < reviews.length; idx++) {
            const opt = document.createElement("option");
            opt.value = idx;
            opt.text = reviews[idx]['establishment_name'];
            sel.add(opt, null);
        }
    }
    
}