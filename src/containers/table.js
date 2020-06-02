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
        const { Codemakerformtoggled, Codebreakerformtoggled, CodemakerTarget, CodebreakerTarget, isPlayer1turn, Turn, Countchecked, Secret, PUSH_TABLE } = props;

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
        this.PUSH_TABLE = PUSH_TABLE.bind(this);
    }

    toggleCodebreaker = (num, color) => {
        document.querySelector("div.Ansform").classList.toggle('active')
        const { Codemakerformtoggled, Codebreakerformtoggled, CodemakerTarget, CodebreakerTarget, isPlayer1turn, Turn, Countchecked, Secret } = this.props;

        if (Codebreakerformtoggled) {
            this.rollCodebreakerturn(CodebreakerTarget, color)
        }
        else {
            this.PUSH_TABLE({
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
        const { Codemakerformtoggled, Codebreakerformtoggled, CodemakerTarget, CodebreakerTarget, isPlayer1turn, Turn, Countchecked, Secret } = this.props;
        if (Codemakerformtoggled) {
            this.rollCodemakerturn(CodemakerTarget, color)
        }
        else {
            this.PUSH_TABLE({
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
            Secret } = this.props;

        if (e.classList.length == 2) {
            this.PUSH_TABLE({
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
            this.PUSH_TABLE({
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
            Secret } = this.props;

        if (e.classList.length == 2) {
            this.PUSH_TABLE({
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
            this.PUSH_TABLE({
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
        const { Turn } = this.props;
        if (Turn === -1) {
            document.querySelector("div.Setupform").classList.toggle("active")
        }

    }

    toggleSecretform = () => {
        document.querySelector("div.Secretcodesetup").classList.toggle("active")
    }

    toggleHistory= () => {
        document.querySelector("div.Tablehistory").classList.toggle("active")
    }

    rollTurns() {
        const {
            Codebreakerformtoggled,
            Codemakerformtoggled,
            CodemakerTarget,
            CodebreakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn, Secret } = this.props;

        this.PUSH_TABLE({
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
            Secret } = this.props;

        this.PUSH_TABLE({
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
            Secret } = this.props;


        this.PUSH_TABLE({
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
        debugger
        const {
            isPlayer1turn,
            Countchecked,
            Turn,
            Secret } = this.props;


        return (
            <div className={"Table"}>
                <Formtable secret={Secret} beginGame={this.beginGame} pushSecret={this.pushSecret} toggleSetupform={this.toggleSetupform} toggleCodebreaker={this.toggleCodebreaker} toggleCodemaker={this.toggleCodemaker} toggleSecretform={this.toggleSecretform} />
                <Statustable toggleHistory={this.toggleHistory} />
                <Tablehistory toggleHistory={this.toggleHistory} />

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

const mapStateToProps = store => {
    debugger;
    return { ...store.table[store.table.length - 1] };
};

const mapDispatchToProps = dispatch => ({
    PUSH_TABLE: table => dispatch({ type: 'PUSH_TABLE', table }),
});


Table.propTypes = {
    PUSH_TABLE: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

