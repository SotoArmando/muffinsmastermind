import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Asktable from '../components/asktable';
import Askstatus from '../components/askstatus';
import Formtable from './formtable';
import Statustable from './statustable';
import Tablehistory from './tablehistory';
import Player from '../logic/player';


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
            isOneplayer,
            dummyplayer,
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
            isOneplayer: isOneplayer || true,
            dummyplayer
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
        this.setisOneplayer = this.setisOneplayer.bind(this);
        this.PUSH_TABLE = PUSH_TABLE.bind(this);
    }

    toggleCodebreaker(num, color) {
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

    toggleCodemaker(num, color) {
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

    rollCodemakerturn(num, color) {
        const e = document.querySelector(".Askstatus .Socket.n" + num)
        const {
            Codemakerformtoggled,
            Codemakerchecked,
        } = this.state;

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
    }

    rollCodebreakerturn(num, color) {
        const e = document.querySelector(".Asktable .Socket.n" + num)
        const {
            Codebreakerchecked,
        } = this.state;

        if (e.classList.length == 2) {
            this.setState({
                ...this.state,
                Codebreakerformtoggled: false,
                Codebreakerchecked: [...Codebreakerchecked.slice(0, num % 4), color, ...Codebreakerchecked.slice((num % 4) + 1)],
            })
        } else {
            this.setState({
                ...this.state,
                Codebreakerformtoggled: false,
                Codebreakerchecked: [...Codebreakerchecked.slice(0, num % 4), color, ...Codebreakerchecked.slice((num % 4) + 1)],
            })
        }
    }

    toggleSetupform() {
        const { Turn } = this.state;
        if (Turn === -1) {
            document.querySelector("div.Setupform").classList.toggle("active")
        }

    }

    toggleSecretform() {
        document.querySelector("div.Secretcodesetup").classList.toggle("active")
    }

    toggleHistory() {
        document.querySelector("div.Tablehistory").classList.toggle("active")
    }

    toggleWinner() {
        document.querySelector("div.Winner").classList.toggle("active")
    }
    rollTurns() {
        const {
            CodemakerHist,
            CodebreakerHist,
            Codebreakerformtoggled,
            isPlayer1turn,
            Turn,
            Codebreakerchecked,
            Codemakerchecked,
            isOneplayer,
            Secret } = this.state;

        const player = Player();
        const hist = player.getCodemakerplay(Codebreakerchecked, Secret);
        
        if (isOneplayer) {

            this.setState({
                ...this.state,
                CodebreakerHist: [...CodebreakerHist, Codebreakerchecked],
                CodemakerHist: [...CodemakerHist, hist],
                Codebreakerformtoggled: false,
                Codebreakerchecked: ["", "", "", ""],
                Codemakerchecked: ["", "", "", ""],
                isPlayer1turn: true,
                Turn: Turn + 2,
            })
        } else {
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
        }


        this.PUSH_TABLE({ ...this.state })

    }

    pushSecret(color) {
        const {
            Secret } = this.state;
        if (Array.isArray(color)) {
            this.setState({
                ...this.state,
                Secret: color,
                isOneplayer: true,
            })
        } else {
            this.setState({
                ...this.state,
                Secret: [...Secret, color]
            })
        }


    }

    beginGame() {
        this.setState({
            ...this.state,
            Turn: 0,
        })
    }

    setisOneplayer(val) {
        this.setState({ ...this.state, isOneplayer: val })
    }

    resetGame() {
        this.setState({
            CodemakerHist: [],
            CodebreakerHist: [],
            Codemakerformtoggled: false,
            Codebreakerformtoggled: false,
            CodemakerTarget: 0,
            CodebreakerTarget: 0,
            isPlayer1turn: true,
            Turn: -1,
            Codebreakerchecked: ["", "", "", ""],
            Codemakerchecked: ["", "", "", ""],
            Secret: [],
        })
    }

    toggleQuestions() {
        
        const e = document.querySelector("div.Playersquestion")
        const e1 = document.querySelector("div.Playerssecondquestion")

        e.classList.toggle('displayed')
        e1.classList.toggle('displayed')

        setTimeout(() => {
            e.classList.toggle('active')
            e1.classList.toggle('active')
        }, 1)
    }

    render() {
        const {
            CodemakerHist,
            CodebreakerHist,
            isPlayer1turn,
            Codebreakerchecked,
            Codemakerchecked,
            Turn,
            isOneplayer,
            Secret } = this.state;


        const cond = (CodebreakerHist.length > 0) ? CodebreakerHist[CodebreakerHist.length - 1].join("") : "0"
        if (cond === Secret.join("") && document.querySelector("div.Winner").classList.length === 1) {
            this.toggleWinner();
        }

        
        return (
            <div className={"Table"}>
                <Formtable setisOneplayer={this.setisOneplayer} isOneplayer={isOneplayer} toggleQuestions={this.toggleQuestions} secret={Secret} isPlayer1turn={isPlayer1turn} beginGame={this.beginGame} pushSecret={this.pushSecret} toggleSetupform={this.toggleSetupform} toggleCodebreaker={this.toggleCodebreaker} toggleCodemaker={this.toggleCodemaker} toggleSecretform={this.toggleSecretform} />
                <Statustable toggleHistory={this.toggleHistory} />
                <Tablehistory toggleHistory={this.toggleHistory} />

                <div className={"row centered shorten1024 after0 " + ((Turn === -1) ? "inactive" : "")}>
                    <Asktable CodebreakerHist={CodebreakerHist} Codebreakerchecked={Codebreakerchecked} turn={Turn} toggleCodebreaker={this.toggleCodebreaker} inactive={(Turn === -1)} />
                </div>
                <div className={"row centered shorten1024 " + ((Turn === -1) ? "inactive" : "")}>
                    <Askstatus CodemakerHist={CodemakerHist} Codemakerchecked={Codemakerchecked} turn={Turn} toggleCodemaker={this.toggleCodemaker} inactive={(Turn === -1)} />
                </div>


                <div className="Winner">
                    <span className="head1">We got a winner</span>
                    <div className="col">
                        <span>Congrats to the Codebreaker/Codemaker</span>
                        <span>You got your code persist 10 round/ You discovered the code in #rounds</span>
                        <span>CONGRATS!</span>
                    </div>
                    <div className="row centered">
                        <span className="span0 border0 useraction margin1" onClick={() => { this.resetGame(); this.toggleWinner(); }}>Play Again</span>
                        <span className="span0 border0 useraction margin1">Share</span>
                    </div>
                    <span className="Close" onClick={() => this.toggleWinner()}>Close</span>
                </div>
                <div className={"isPlayerready " + ((Codebreakerchecked.filter(e => e != "").length === 4 || (!isPlayer1turn && Codemakerchecked.filter(e => e != "").length > 0)) ? "active" : "")} onClick={() => this.rollTurns()}>
                    <span>Ready</span>
                    <span className="status">Tap here to continue</span>
                </div>

            </div>
        );
    }




}
const mapStateToProps = (state) => ({ dummyplayer: state.dummyplayer });

const mapDispatchToProps = dispatch => ({
    PUSH_TABLE: table => dispatch({ type: 'PUSH_TABLE', table }),
});

Table.propTypes = {
    CodemakerHist: PropTypes.array.isRequired,
    CodebreakerHist: PropTypes.array.isRequired,
    Codemakerformtoggled: PropTypes.bool.isRequired,
    Codebreakerformtoggled: PropTypes.bool.isRequired,
    CodemakerTarget: PropTypes.number.isRequired,
    CodebreakerTarget: PropTypes.number.isRequired,
    isPlayer1turn: PropTypes.bool.isRequired,
    Turn: PropTypes.number.isRequired,
    Codebreakerchecked: PropTypes.array.isRequired,
    Codemakerchecked: PropTypes.array.isRequired,
    Secret: PropTypes.array.isRequired,
    isOneplayer: PropTypes.bool.isRequired,
    dummyplayer: PropTypes.func.isRequired,
    PUSH_TABLE: PropTypes.func.isRequired,
};
    


export default connect(mapStateToProps, mapDispatchToProps)(Table);

