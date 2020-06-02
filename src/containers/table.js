import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Asktable from '../components/asktable';
import Askstatus from '../components/askstatus';
import Formtable from './formtable';
import Statustable from './statustable';
import Screenframe from '../components/screenframe';
import Tablehistory from './tablehistory';

class Table extends React.Component {
    constructor(props) {
        super(props)
        const { CodemakerHist,
            CodebreakerHist,
            Codemakerformtoggled,
            Codebreakerformtoggled,
            CodemakerTarget,
            CodebreakerTarget,
            isPlayer1turn,
            Turn,
            Codebreakerchecked,
            Codemakerchecked,
            Secret,
            PUSH_TABLE } = props;

        this.state = {
            Codemakerformtoggled: Codemakerformtoggled || false,
            Codebreakerformtoggled: Codebreakerformtoggled || false,
            CodemakerTarget: CodemakerTarget || 0,
            CodebreakerTarget: CodebreakerTarget || 0,
            isPlayer1turn: isPlayer1turn || true,
            Turn: Turn || -1,
            CodemakerHist: CodemakerHist || [],
            CodebreakerHist: CodebreakerHist || [],
            Codebreakerchecked: Codebreakerchecked || ["", "", "", ""],
            Codemakerchecked: Codemakerchecked || ["", "", "", ""],
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
        this.PUSH_TABLE = PUSH_TABLE.bind(this);
    }

    toggleCodebreaker = (num, color) => {
        document.querySelector("div.Ansform").classList.toggle('active')
        const {
            Codebreakerformtoggled,
            CodebreakerTarget,
        } = this.state;

        if (Codebreakerformtoggled) {
            this.rollCodebreakerturn(CodebreakerTarget, color)
        }
        else {
            this.setState({
                ...this.state,
                Codebreakerformtoggled: !Codebreakerformtoggled,
                CodebreakerTarget: num,
            })
        }

    }

    toggleCodemaker = (num, color) => {
        document.querySelector("div.Askform").classList.toggle('active')
        const {
            Codemakerformtoggled,
            CodemakerTarget,
        } = this.state;

        if (Codemakerformtoggled) {
            this.rollCodemakerturn(CodemakerTarget, color)
        }
        else {
            this.setState({
                ...this.state,
                Codemakerformtoggled: !Codemakerformtoggled,
                CodemakerTarget: num,
            })
        }

    }

    rollCodemakerturn = (num, color) => {
        const e = document.querySelector(".Askstatus .Socket.n" + num)
        const {
            Codemakerformtoggled,
            Codemakerchecked,
        } = this.state;
        debugger;
        if (e.classList.length == 2) {
            this.setState({
                ...this.state,
                Codemakerformtoggled: !Codemakerformtoggled,
                Codemakerchecked: [...Codemakerchecked.slice(0, num % 4), color, ...Codemakerchecked.slice((num % 4) + 1)],
            })
        } else {
            this.setState({
                ...this.state,
                Codemakerformtoggled: !Codemakerformtoggled,
                Codemakerchecked: [...Codemakerchecked.slice(0, num % 4), color, ...Codemakerchecked.slice((num % 4) + 1)],
            })
        }
        e.classList.remove("red", "blue", "green", "yellow", "white", "black");
        e.classList.toggle(color);
    }

    rollCodebreakerturn = (num, color) => {
        const e = document.querySelector(".Asktable .Socket.n" + num)
        const {
            Codebreakerformtoggled,
            Codebreakerchecked,
        } = this.state;

        if (e.classList.length == 2) {
            this.setState({
                ...this.state,
                Codebreakerformtoggled: !Codebreakerformtoggled,
                Codebreakerchecked: [...Codebreakerchecked.slice(0, num % 4), color, ...Codebreakerchecked.slice((num % 4) + 1)],
            })
        } else {
            this.setState({
                ...this.state,
                Codebreakerformtoggled: !Codebreakerformtoggled,
                Codebreakerchecked: [...Codebreakerchecked.slice(0, num % 4), color, ...Codebreakerchecked.slice((num % 4) + 1)],
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

    toggleHistory = () => {
        document.querySelector("div.Tablehistory").classList.toggle("active")
    }

    rollTurns() {
        const {
            CodemakerHist,
            CodebreakerHist,
            Codebreakerformtoggled,
            isPlayer1turn,
            Turn,
            Codebreakerchecked,
            Codemakerchecked } = this.state;

        this.setState({
            ...this.state,
            CodebreakerHist: ((isPlayer1turn) ? [...CodebreakerHist, Codebreakerchecked] : CodebreakerHist),
            CodemakerHist: ((!isPlayer1turn) ? [...CodemakerHist, Codemakerchecked] : CodemakerHist),
            Codebreakerformtoggled: !Codebreakerformtoggled,
            Codebreakerchecked: ["", "", "", ""],
            Codemakerchecked: ["", "", "", ""],
            isPlayer1turn: !isPlayer1turn,
            Turn: Turn + 1,
        })

        this.PUSH_TABLE({...this.state})

    }

    pushSecret(color) {
        debugger;
        const {
            Secret } = this.state;

        this.setState({
            ...this.state,
            Secret: [...Secret, color]
        })

    }

    beginGame() {
        this.setState({
            ...this.state,
            Turn: 0,
        })
    }

    render() {
        const {
            CodemakerHist,
            CodebreakerHist,
            isPlayer1turn,
            Codebreakerchecked,
            Codemakerchecked,
            Turn,
            Secret } = this.state;

        debugger;

        return (
            <div className={"Table"}>
                <Formtable secret={Secret} isPlayer1turn={isPlayer1turn} beginGame={this.beginGame} pushSecret={this.pushSecret} toggleSetupform={this.toggleSetupform} toggleCodebreaker={this.toggleCodebreaker} toggleCodemaker={this.toggleCodemaker} toggleSecretform={this.toggleSecretform} />
                <Statustable toggleHistory={this.toggleHistory} />
                <Tablehistory toggleHistory={this.toggleHistory} />

                <div className={"row centered shorten1024 after0 " + ((Turn === -1) ? "inactive" : "")}>
                    <Asktable CodebreakerHist={CodebreakerHist} Codebreakerchecked={Codebreakerchecked} turn={Turn} toggleCodebreaker={this.toggleCodebreaker} inactive={(Turn === -1)} />
                </div>
                <div className={"row centered shorten1024 " + ((Turn === -1) ? "inactive" : "")}>
                    <Askstatus CodemakerHist={CodemakerHist} Codemakerchecked={Codemakerchecked} turn={Turn} toggleCodemaker={this.toggleCodemaker} inactive={(Turn === -1)} />
                </div>


                <div className={"isPlayerready " + ((Codebreakerchecked.filter(e => e != "").length === 4 || (!isPlayer1turn && Codemakerchecked.filter(e => e != "").length > 0)) ? "active" : "")} onClick={() => this.rollTurns()}>
                    <span>Ready</span>
                    <span className="status">Tap here to continue</span>
                </div>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    PUSH_TABLE: table => dispatch({ type: 'PUSH_TABLE', table }),
});


Table.propTypes = {
    PUSH_TABLE: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Table);

