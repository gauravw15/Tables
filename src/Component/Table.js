import React, {Component} from 'react';
import Row from './Row';
import Header from './Header'
import faker from 'faker';

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            rows: [this.newRow(0)],
            i:1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    newRow = (i) => {
        let max = new Date().getTime();
        let ranSeed = Math.random() * max;
        let randomDate = new Date(ranSeed);

        let row = <Row key={i}
        date={randomDate.getDate()} year={randomDate.getFullYear()}
        month={randomDate.getMonth()} desc={faker.company.catchPhraseDescriptor()}
        amount={faker.commerce.price(5,100)}
        />;

        return row;
    }

    handleSubmit(){
        let row = this.newRow(this.state.i);
        const nwRow = this.state.rows.push(row);
        this.setState({rows: [...this.state.rows,nwRow],i: this.state.i + 1});
    }

    render(){
        return(
            <div>
                <div id="table">
                    <Header/>
                    {this.state.rows}
                </div>
                <button type="submit" onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        )
    }
}

export default Table;