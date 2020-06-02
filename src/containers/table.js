import React from 'react';
import Asktable from '../components/asktable';
import Askstatus from '../components/askstatus';
import Formtable from './formtable';
import Statustable from './statustable';
import Screenframe from '../components/screenframe';

class Table extends React.Component {
    constructor(props) {
        super(props)
        const { Codemakerformtoggled, Codebreakerformtoggled, CodemakerTarget, CodebreakerTarget, isPlayer1turn, Turn, Countchecked, Secret } = props;
        this.state = {
            Codemakerformtoggled: Codemakerformtoggled || false,
            Codebreakerformtoggled: Codebreakerformtoggled || false,
            CodemakerTarget: CodemakerTarget || 0,
            CodebreakerTarget: CodebreakerTarget || 0,
            isPlayer1turn: isPlayer1turn || true,
            Turn: Turn || -1,
            Countchecked: Countchecked || 0,
            Secret: Secret || [],
        }

        this.toggleCodebreaker = this.toggleCodebreaker.bind(this);
        this.toggleCodemaker = this.toggleCodemaker.bind(this);
        this.rollCodemakerturn = this.rollCodemakerturn.bind(this);
        this.rollCodebreakerturn = this.rollCodebreakerturn.bind(this);
        this.toggleSetupform = this.toggleSetupform.bind(this);
        this.rollTurns = this.rollTurns.bind(this);
        this.toggleSecretform = this.toggleSecretform.bind(this);
        this.pushSecret = this.pushSecret.bind(this);
        this.beginGame = this.beginGame.bind(this);
    }


    toggleCodebreaker = (num, color) => {
        document.querySelector("div.Ansform").classList.toggle('active')
        const { Codemakerformtoggled, Codebreakerformtoggled, CodemakerTarget, CodebreakerTarget, isPlayer1turn, Turn, Countchecked, Secret } = this.state;

        if (Codebreakerformtoggled) {
            this.rollCodebreakerturn(CodebreakerTarget, color)
        }
        else {
            this.setState({
                Codebreakerformtoggled: !Codebreakerformtoggled,
                CodebreakerTarget: num,
                Codemakerformtoggled,
                CodemakerTarget,
                isPlayer1turn,
                Countchecked,
                Turn,
                Secret
            })
        }

    }

    toggleCodemaker = (num, color) => {
        document.querySelector("div.Askform").classList.toggle('active')
        const { Codemakerformtoggled, Codebreakerformtoggled, CodemakerTarget, CodebreakerTarget, isPlayer1turn, Turn, Countchecked, Secret } = this.state;
        if (Codemakerformtoggled) {
            this.rollCodemakerturn(CodemakerTarget, color)
        }
        else {
            this.setState({
                Codemakerformtoggled: !Codemakerformtoggled,
                CodemakerTarget: num,
                Codebreakerformtoggled,
                CodebreakerTarget,
                isPlayer1turn,
                Countchecked,
                Turn,
                Secret
            })
        }

    }

    rollCodemakerturn = (num, color) => {
        const e = document.querySelector(".Askstatus .Socket.n" + num)
        const {
            Codebreakerformtoggled,
            Codemakerformtoggled,
            CodemakerTarget,
            CodebreakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn,
            Secret } = this.state;

        if (e.classList.length == 2) {
            this.setState({
                Codemakerformtoggled: !Codemakerformtoggled,
                CodebreakerTarget,
                Codebreakerformtoggled,
                CodemakerTarget,
                isPlayer1turn,
                Countchecked: Countchecked + 1,
                Turn,
                Secret
            })
        } else {
            this.setState({
                Codemakerformtoggled: !Codemakerformtoggled,
                CodebreakerTarget,
                Codebreakerformtoggled,
                CodemakerTarget,
                isPlayer1turn,
                Countchecked,
                Turn,
            })
        }
        e.classList.remove("red", "blue", "green", "yellow", "white", "black");
        e.classList.toggle(color);
    }

    rollCodebreakerturn = (num, color) => {
        const e = document.querySelector(".Asktable .Socket.n" + num)
        const {
            Codebreakerformtoggled,
            CodebreakerTarget,
            Codemakerformtoggled,
            CodemakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn,
            Secret } = this.state;

        if (e.classList.length == 2) {
            this.setState({
                Codebreakerformtoggled: !Codebreakerformtoggled,
                CodebreakerTarget,
                Codemakerformtoggled,
                CodemakerTarget,
                isPlayer1turn,
                Countchecked: Countchecked + 1,
                Turn,
                Secret
            })
        } else {
            this.setState({
                Codebreakerformtoggled: !Codebreakerformtoggled,
                CodebreakerTarget,
                Codemakerformtoggled,
                CodemakerTarget,
                isPlayer1turn,
                Countchecked,
                Turn,
                Secret
            })
        }
        e.classList.remove("red", "blue", "green", "yellow", "white", "black");
        e.classList.toggle(color);
    }

    toggleSetupform = (Player1role) => {
        const { Turn } = this.state;
        if (Turn === -1) {
            document.querySelector("div.Setupform").classList.toggle("active")
        }
        
    }

    toggleSecretform = () => {
        document.querySelector("div.Secretcodesetup").classList.toggle("active")
    }

    rollTurns() {
        const {
            Codebreakerformtoggled,
            Codemakerformtoggled,
            CodemakerTarget,
            CodebreakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn, Secret } = this.state;

        this.setState({
            Codebreakerformtoggled: !Codebreakerformtoggled,
            CodebreakerTarget,
            Codemakerformtoggled,
            CodemakerTarget,
            isPlayer1turn: !isPlayer1turn,
            Countchecked: 0,
            Turn: Turn + 1,
            Secret
        })

    }

    pushSecret(color) {
        debugger;
        const {
            Codebreakerformtoggled,
            Codemakerformtoggled,
            CodemakerTarget,
            CodebreakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn,
            Secret } = this.state;

        this.setState({
            Codebreakerformtoggled: !Codebreakerformtoggled,
            CodebreakerTarget,
            Codemakerformtoggled,
            CodemakerTarget,
            isPlayer1turn: !isPlayer1turn,
            Countchecked: 0,
            Turn,
            Secret: [...Secret, color]
        })

    }

    beginGame() {
        const {
            Codebreakerformtoggled,
            CodebreakerTarget,
            Codemakerformtoggled,
            CodemakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn,
            Secret } = this.state;


        this.setState({
            Codebreakerformtoggled,
            CodebreakerTarget,
            Codemakerformtoggled,
            CodemakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn: 0,
            Secret
        })
    }

    render() {
        const {
            isPlayer1turn,
            Countchecked,
            Turn,
            Secret } = this.state;
        console.log(Countchecked);

        return (
            <div className={"Table"}>
                <Formtable secret={Secret} beginGame={this.beginGame} pushSecret={this.pushSecret} toggleSetupform={this.toggleSetupform} toggleCodebreaker={this.toggleCodebreaker} toggleCodemaker={this.toggleCodemaker} toggleSecretform={this.toggleSecretform} />
                <Statustable />

                <div className={"row centered shorten1024 after0 " + ((Turn === -1) ? "inactive" : "")}>
                    <Asktable turn={Turn} toggleCodebreaker={this.toggleCodebreaker} inactive={(Turn === -1)} />
                </div>
                <div className={"row centered shorten1024" + ((Turn === -1) ? "inactive" : "")}>
                    <Askstatus turn={Turn} toggleCodemaker={this.toggleCodemaker} inactive={(Turn === -1)} />
                </div>
                <div className={"isPlayerready " + ((Countchecked === 4 || (!isPlayer1turn && Countchecked > 0)) ? "active" : "")} onClick={() => this.rollTurns()}>
                    <span>Ready</span>
                    <span className="status">Tap here to continue</span>
                </div>

            </div>
        );
    }
}


export default Table;