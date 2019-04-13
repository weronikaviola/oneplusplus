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
            <div className='TestPage-test' onSubmit={(evt) => {
                evt.preventDefault();
                this.props.nextStep(this.state.answer)
            }}>
                <form className='form-horizontal'>
                    <div className='form-group'>
                        <div className='col-sm-12'>
                            <h2> 20 &amp; 24 </h2>
                            <input type="text" autocomplete='off' className="form-control" name="answer2" value={this.state.answer} onChange={this.handleChange} autoFocus='true' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-default'>next</button>
                    </div>
                </form>

            </div>
        )
    }
}



export default TestTwo;