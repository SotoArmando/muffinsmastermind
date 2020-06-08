export default function operator(type) {
    
    switch (type) {
        case ("TOGGLE_CASE_GAMEWIN"): {
            document.querySelector("div.Winner").classList.toggle("active");
            break;
        }
        case ("TOGGLE_CASE_GAMEHIST"): {
            document.querySelector("div.Tablehistory").classList.toggle("active");
            break;
        }
        case ("TOGGLE_CASE_GAMESETUPQUESTIONS"): {
            document.querySelector("div.Playersquestion").classList.toggle("displayed");
            document.querySelector("div.Playersquestion").classList.toggle("active");
            document.querySelector("div.Playerssecondquestion").classList.toggle("displayed");
            document.querySelector("div.Playerssecondquestion").classList.toggle("active");
            break;
        }
        case ("TOGGLE_CASE_GAMESETUP"): {
            document.querySelector("div.Setupform").classList.toggle("active");
            break;
        }
        case ("TOGGLE_CASE_FORMSETUPSECRET"): {
            document.querySelector("div.Secretcodesetup").classList.toggle("active")
            break;
        }
        case ("TOGGLE_CASE_FORMCODEBREAKERINPUT"): {
            document.querySelector("div.Ansform").classList.toggle('active')
            break;
        }
        case ("TOGGLE_CASE_FORMCODEMAKERINPUT"): {
            document.querySelector("div.Askform").classList.toggle('active')
            break;
        }

    }
}