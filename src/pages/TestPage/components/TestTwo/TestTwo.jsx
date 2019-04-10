import React from 'react';

import '../Tests.css';

class TestTwo extends React.Component {
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
                            <h2> 20 &amp; 24 </h2>
                            <input type="text" autocomplete='off' className="form-control" name="answer2" value={this.state.answer} onChange={this.handleChange} />
                        </div>
                    </div>
                </form>
                <button onClick={(evt) => {
                    this.props.nextStep(this.state.answer)
                }}>next</button>
            </div>
        )
    }
}



export default TestTwo;