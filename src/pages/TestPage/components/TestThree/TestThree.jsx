import React from 'react';

import '../Tests.css';

class TestThree extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            answer: e.target.value
        });
    }

    render() {
        return (
            <div className='TestPage-test'>
                <form className='form-horizontal'>
                    <div className='form-group'>
                        <div className='col-sm-12'>
                            <h2>Type this number in decimal</h2>
                            <h2>11111111</h2>
                            <input type="text" autocomplete='off' className="form-control" name="answer3" value={this.state.answer} onChange={this.handleChange} />
                        </div>
                    </div>
                </form>
                <button onClick={() => { this.props.calculateResult(this.state.answer) }}>calculate</button>
            </div>
        )
    }
}



export default TestThree;