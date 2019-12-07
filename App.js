import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './src/components/dashboard/Dashboard';
import Search from './src/components/search/Search';
import Detail from './src/components/detail/Detail';

const App = createStackNavigator({
  Dashboard: { screen: Dashboard },
  Search: { screen: Search },
  Detail: { screen: Detail },
},
  {
    defaultNavigationOptions: { header: null },
    initialRouteName: 'Dashboard',
  },
);
export default createAppContainer(App);