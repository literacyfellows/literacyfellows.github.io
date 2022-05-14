var currentColor = 0;
var textColors = ["rgb(49 234 25 / 95%)", "#0c46ff", "red", "#ff1eaf", "#00c2ff"];
var shadowColors = ["#246d2b", "#042694", "#9b2828", "#880c5c", "#1181a3"];

function toggleTopics(button) {
    options = document.getElementById("options");
    if (window.getComputedStyle(options).display == "none") {
        // show it
        
        options.classList = "options flex";
        button.textContent = "Hide Topics";
    } else {
        // hide it
        options.classList = "options hidden";
        button.textContent = "Show Topics";
    }
}

function changeColor () {
    currentColor ++;
    if (currentColor >= textColors.length) {
        currentColor = 0;
    }

    document.getElementById("title").style.color = textColors[currentColor];
}
document.addEventListener("DOMContentLoaded", () => {
    let topic = getParameterByName("topic");

    let zines = [];

    if (topic == null) {
        topic = "home";
    }

    
    document.getElementById(topic).classList += "active";

    switch (topic) {
        case 'chapbooks':
        //    document.getElementById("title").textContent += " - Chatbooks";
            zines = ["Addams Family", "Lego", "Moving", "Star Wars"];
            break;
        case 'creative':
       //     document.getElementById("title").textContent += " - Creative";
            zines = ["Built by the Sea", "DIN"];
            break;
        case 'environmental':
        //    document.getElementById("title").textContent += " - Environmental";
            zines = ["Chesapeake Bay Alphabet", "Crab", "Living Sustainably"];
            break;
        case 'health': 
       //     document.getElementById("title").textContent += " - Health";
            zines = ["Archie's Feeling Down: Mental Health Awareness for Children"];
            break;
        case 'misc':
       //     document.getElementById("title").textContent += " - Miscellaneous";
            zines = ["Critical Race Theory"];
            break;
        default: 
           // all zines... home
           zines = ["Addams Family", "Archie's Feeling Down: Mental Health Awareness for Children", "Built by the Sea", "Chesapeake Bay Alphabet", "Crab", "Critical Race Theory", "DIN", "Lego", "Living Sustainably", "Moving", "Star Wars"]

    }
  

    setPage(zines);


    function setPage(zines) {
        var count = 0;
        const page = document.getElementById("zines");
        zines.forEach(element => {
            
            if (count >= textColors.length) {
                count = 0;
            }

            const line = document.createElement("a");
            line.href = "zine.html?zine=" + element;
            line.classList = "zine";
            line.target = "_blank";

            line.style.color = textColors[count];
            line.style.textShadow = "2px 2px " + shadowColors[count];
            line.appendChild(document.createElement("br"));

            line.textContent = element;
            page.appendChild(line);

            count++;

      //     (document.createElement("li").appendChild(line))
      //     page.appendChild(document.createElement("br"));
        });
     
        
    }


    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

});

window.onclick = function (event) {
    if (!event.target.matches(".options") && !event.target.matches(".show") ) {
        document.getElementById("options").classList = "options hidden";;
        document.getElementById("show").textContent = "Show Topics";
    }
}
setInterval(changeColor, 1000);