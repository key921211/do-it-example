import React, { PureComponent } from 'react';
//import axios from 'axios';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';
//import Api from '../../Api';
//import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';

class TransactionList extends PureComponent {
  componentDidMount() {
    //  Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
    this.props.requestTransactionList();
  }
  render() {
    const { transactions } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  //setTransactionList: () => {},
  requestTransactionList: () => {},
};

export default TransactionList;
