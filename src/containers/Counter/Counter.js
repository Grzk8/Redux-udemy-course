import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCrearors from '../../store/actions/index';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id) }>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter, 
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCrearors.increment()),
        onDecrementCounter: () => dispatch(actionCrearors.decrement()),
        onAddCounter: () => dispatch(actionCrearors.add(10)),
        onSubtractCounter: () => dispatch(actionCrearors.subtract(15)),
        onStoreResult: (result) => dispatch(actionCrearors.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCrearors.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);