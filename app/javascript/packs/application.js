/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import ReactOnRails from 'react-on-rails';
import Main from '../components/Main';
var myCustomContext = require.context("components", true)
console.log(myCustomContext)
var ReactRailsUJS = require("react_ujs")
// // use `custom_components/` for <%= react_component(...) %> calls
ReactRailsUJS.useContext(myCustomContext)
ReactRailsUJS.detectEvents()

ReactOnRails.register({
  Main
});


// (function(){
// })();
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello />,document.querySelector('#root'))
// })


console.log('Hello World from Webpacker')
