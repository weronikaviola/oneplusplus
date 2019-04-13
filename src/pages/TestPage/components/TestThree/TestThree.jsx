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
            <div className='TestPage-test' onSubmit={(evt) => {
                evt.preventDefault();
                this.props.calculateResult(this.state.answer)
            }}>
                <form className='form-horizontal'>
                    <div className='form-group'>
                        <div className='col-sm-12'>
                            <h2>Type this number in decimal</h2>
                            <h2>11111111</h2>
                            <input type="text" autocomplete='off' className="form-control" name="answer3" value={this.state.answer} onChange={this.handleChange} autoFocus='true' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <button>submit</button>
                    </div>
                </form>

            </div>
        )
    }
}



export default TestThree;