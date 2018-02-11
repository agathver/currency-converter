import { StackNavigator } from 'react-navigation';
import CurrencyConverter from './CurrencyConverter';
import CurrencyList from './CurrencyList';

const Root = StackNavigator({
  Home: { screen: CurrencyConverter },
  CurrencyList: { screen: CurrencyList },
});

export default Root;
