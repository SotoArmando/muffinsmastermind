export default function operator(type, container = null) {
    const doc = container || document;
    switch (type) {
        case ("TOGGLE_CASE_GAMEWIN"): {
            doc.querySelector("div.Winner").classList.toggle("active");
            break;
        }
        case ("TOGGLE_CASE_GAMEHIST"): {
            doc.querySelector("div.Tablehistory").classList.toggle("active");
            break;
        }
        case ("TOGGLE_CASE_GAMESETUPQUESTIONS"): {
            doc.querySelector("div.Playersquestion").classList.toggle("displayed");
            doc.querySelector("div.Playersquestion").classList.toggle("active");
            doc.querySelector("div.Playerssecondquestion").classList.toggle("displayed");
            doc.querySelector("div.Playerssecondquestion").classList.toggle("active");
            break;
        }
        case ("TOGGLE_CASE_GAMESETUP"): {
            doc.querySelector("div.Setupform").classList.toggle("active");
            break;
        }
        case ("TOGGLE_CASE_FORMSETUPSECRET"): {
            doc.querySelector("div.Secretcodesetup").classList.toggle("active")
            break;
        }
        case ("TOGGLE_CASE_FORMCODEBREAKERINPUT"): {
            doc.querySelector("div.Ansform").classList.toggle('active')
            break;
        }
        case ("TOGGLE_CASE_FORMCODEMAKERINPUT"): {
            doc.querySelector("div.Askform").classList.toggle('active')
            break;
        }

    }
}