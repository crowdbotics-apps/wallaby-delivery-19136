import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item83945Navigator from '../features/Add-Item83945/navigator';
import Maps83941Navigator from '../features/Maps83941/navigator';
import UserProfile83937Navigator from '../features/UserProfile83937/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item83945: { screen: Add-Item83945Navigator },
Maps83941: { screen: Maps83941Navigator },
UserProfile83937: { screen: UserProfile83937Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
