import React from 'react';
import { Link } from 'react-router-dom';

import Timer from './components/Timer/Timer';
import InfoPage from './components/InfoPage/InfoPage';
import TestOne from './components/TestOne/TestOne';
import TestTwo from './components/TestTwo/TestTwo';
import TestThree from './components/TestThree/TestThree';

class TestPage extends React.Component {
    constructor() {
        super();
        this.state = {
            stage: 0,
            answers: [],
            timer: 30
        }
    }

    toFirstStep = () => {
        this.setState(state => {
            let current = state.stage;
            return ({
                stage: current += 1
            });
        });
        this.runTimer();
    }
    nextStep = (answer) => {
        this.setState(state => {
            let current = state.stage;
            let answers = state.answers.slice()
            answers.push(answer);
            return ({
                stage: current += 1,
                answers
            });
        });
    }

    runTimer = () => {
        let seconds = setInterval(() => {
            if (this.state.timer > 0) {
                this.setState(state => {
                    return ({
                        timer: state.timer -= 1
                    });
                });
            } else {
                clearInterval(seconds);
                this.lostTheTest();
            }
        }, 1000)
    }

    calculateResult = async (answer) => {
        await this.setState(state => {
            let current = state.answers;
            current.push(answer);
            return ({
                answers: current,
            });
        });
        let currentAnswers = this.state.answers;
        let correctAnswers = this.answers()();
        let total = 0;
        for (let i = 0; i < 3; i++) {
            if (currentAnswers[i] === correctAnswers[i]) total++;
            console.log(`${currentAnswers[i]}, ${correctAnswers[i]}`)
        }
        if (total >= 2) {
            this.props.history.push('/signup');
        } else {
            this.lostTheTest();
        }
    }

    lostTheTest = () => {
        this.props.history.push('/');
        this.props.unmountApp();
        window.open('http://www.eharmony.com/');
    }

    answers() {
        let answers = function () {
            return ['15', '16', '255'];
        }
        return answers;
    }

    render() {
        return (
            <div>
                <Link class='BackBtn' to='/'>back</Link>
                <br />
                <br />
                <Timer time={this.state.timer} />
                <br />
                {this.state.stage === 0 ?
                    <InfoPage toFirstStep={this.toFirstStep} />
                    :
                    this.state.stage === 1 ?
                        <TestOne nextStep={this.nextStep} />
                        :
                        this.state.stage === 2 ?
                            <TestTwo nextStep={this.nextStep} />
                            :
                            <TestThree calculateResult={this.calculateResult} />
                }

            </div>
        );
    }
}

export default TestPage;