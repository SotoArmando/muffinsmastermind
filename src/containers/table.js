import React from 'react';
import Asktable from '../components/asktable';
import Askstatus from '../components/askstatus';
import Formtable from './formtable';
import Statustable from './statustable';

class Table extends React.Component {
    constructor(props) {
        super(props)
        const { Codemakerformtoggled, Codebreakerformtoggled, CodemakerTarget, CodebreakerTarget, isPlayer1turn, Turn, Countchecked } = props;
        this.state = {
            Codemakerformtoggled: Codemakerformtoggled || false,
            Codebreakerformtoggled: Codebreakerformtoggled || false,
            CodemakerTarget: CodemakerTarget || 0,
            CodebreakerTarget: CodebreakerTarget || 0,
            isPlayer1turn: isPlayer1turn || true,
            Turn: Turn || 0,
            Countchecked: Countchecked || 0,
        }

        this.toggleCodebreaker = this.toggleCodebreaker.bind(this);
        this.toggleCodemaker = this.toggleCodemaker.bind(this);
        this.rollCodemakerturn = this.rollCodemakerturn.bind(this);
        this.rollCodebreakerturn = this.rollCodebreakerturn.bind(this);
        this.rollTurns = this.rollTurns.bind(this);
    }


    toggleCodebreaker = (num, color) => {
        debugger;
        document.querySelector("div.Ansform").classList.toggle('active')
        const { 
            Codebreakerformtoggled,
            Codemakerformtoggled,
            CodemakerTarget,
            CodebreakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn } = this.state;

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
            })
        }

    }

    toggleCodemaker = (num, color) => {
        document.querySelector("div.Askform").classList.toggle('active')
        const { Codebreakerformtoggled, Codemakerformtoggled, CodemakerTarget, CodebreakerTarget } = this.state;
        if (Codemakerformtoggled) {
            this.rollCodemakerturn(CodemakerTarget, color)
            this.setState({
                Codemakerformtoggled: !Codemakerformtoggled,
                CodemakerTarget,
                Codebreakerformtoggled,
                CodebreakerTarget,
            })
        }
        else {
            this.setState({
                Codemakerformtoggled: !Codemakerformtoggled,
                CodemakerTarget: num,
                Codebreakerformtoggled,
                CodebreakerTarget,
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
            Turn } = this.state;

        if (e.classList.length == 2) {
            this.setState({
                Codemakerformtoggled: !Codemakerformtoggled,
                CodebreakerTarget,
                Codebreakerformtoggled,
                CodemakerTarget,
                isPlayer1turn,
                Countchecked: Countchecked + 1,
                Turn,
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
            Codemakerformtoggled,
            CodemakerTarget,
            CodebreakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn } = this.state;

        if (e.classList.length == 2) {
            this.setState({
                Codebreakerformtoggled: !Codebreakerformtoggled,
                CodebreakerTarget,
                Codemakerformtoggled,
                CodemakerTarget,
                isPlayer1turn,
                Countchecked: Countchecked + 1,
                Turn,
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
            })
        } 
        e.classList.remove("red", "blue", "green", "yellow", "white", "black");
        e.classList.toggle(color);
    }

    rollTurns() {
        const { 
            Codebreakerformtoggled,
            Codemakerformtoggled,
            CodemakerTarget,
            CodebreakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn } = this.state;

        this.setState({
            Codebreakerformtoggled: !Codebreakerformtoggled,
            CodebreakerTarget,
            Codemakerformtoggled,
            CodemakerTarget,
            isPlayer1turn: !isPlayer1turn,
            Countchecked: 0,
            Turn: Turn + 1,
        })
        
    }

    render() {
        const { 
            Codebreakerformtoggled,
            Codemakerformtoggled,
            CodemakerTarget,
            CodebreakerTarget,
            isPlayer1turn,
            Countchecked,
            Turn } = this.state;


        return (
            <div className="Table">
                <Formtable toggleCodebreaker={this.toggleCodebreaker} toggleCodemaker={this.toggleCodemaker} />
                <Statustable />
                <div className="row centered">
                    <Asktable turn={Turn} roll={this.rollTurns} isPlayerready={Countchecked===4 && isPlayer1turn} toggleCodebreaker={this.toggleCodebreaker} />
                </div>
                <div className="row centered">
                    <Askstatus turn={Turn} roll={this.rollTurns} isPlayerready={Countchecked===4 && !isPlayer1turn} toggleCodemaker={this.toggleCodemaker} />
                </div>
            </div>
        );
    }
}


export default Table;