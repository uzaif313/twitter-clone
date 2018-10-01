import ReactOnRails from 'react-on-rails';
import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Hello from '../bundles/HelloWorld/components/Hello';
import Main from '../components/Main';
// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Main
});
