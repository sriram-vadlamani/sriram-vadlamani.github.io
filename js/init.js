document.addEventListener("DOMContentLoaded", function () {
    response = Object.create(Response)
    response.init(1)
    document.getElementById("generate").addEventListener("click", function(){response.add()});
    document.getElementById("generate_next").addEventListener("click", function(ev){response.add_next()});
    document.querySelector('#review_select').addEventListener('change', function(event){Review.display(event)});
    Review.dropdown()    
});
