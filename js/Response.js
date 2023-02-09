function typeWriter(div, response_text, i)
{
    if (i < response_text.length) {
        while (response_text.charAt(i) == '\n' && i != 0) {
            div.innerHTML += '<br>';
            i++;
        }
        var pause_num = Math.floor(Math.random() * 15 + 1);
        div.innerHTML += response_text.charAt(i);
        i++;

        var delay = 200;

        if (i % pause_num) {
            delay = 50;
        }

        setTimeout(typeWriter, delay, div, response_text, i);
    }

    if(i == response_text.length - 1){
        document.getElementById("button-response").style.display = "block";
    }
}

let Response = {
    API: null,
    init: function (test_mode) {
        this.API = Object.create(GPT_api);
        this.API.test_mode = test_mode
    },
    data: {
        "response_author": document.getElementById("response_author").innerHTML,
        "establishment_name": document.getElementById("establishment_name").innerHTML,
        "global_context": "",
        "local_context": "Répondre à cet avis de façon bienveillante.",
        "season_greeting": false,
        "review_author": document.getElementById("review_author").innerHTML,
        "review": document.getElementById("avis").innerHTML,
    },
    add: function () {
        this.API.get_response(this.data)
        document.getElementById("generate").style.display = "none";
    },
    add_next: function () {
        // Use the last textaera element
        const textarea_section = document.getElementsByClassName("textarea_section");

        // Manage empty value
        global_context = ".";
        if (textarea_section[textarea_section] != undefined) {
            global_context = textarea_section[textarea_section]
        }

        /* call API */
        document.getElementById("button-response").style.display = "none";
        this.API.get_response(this.data)
        document.getElementById("button-response").style.display = "block";
    },
    display: function (response_text) {
        const response = document.getElementById("response");

        const response_div = document.createElement("div");
        response_div.classList.add('response_section');

        const textarea = document.createElement("textarea");
        textarea.classList.add('textarea_section');
        textarea.setAttribute('placeholder', "Arguments de ma réponse");
        textarea.setAttribute('rows', 10);
        textarea.setAttribute('cols', 200);

        const customer_context = document.createElement("section");
        customer_context.appendChild(textarea)

        const response_section = document.createElement("section");
        response_section.classList.add('response-text');

        //response_section.innerHTML = nl2br(response_text);

        response_div.appendChild(customer_context)
        response_div.appendChild(response_section)
        response.appendChild(response_div)

        /* -------Text animation------- */
        var i = 0;
        document.getElementById("button-response").style.display = "none";
        typeWriter(response_section, response_text, 0);
    }    
}

