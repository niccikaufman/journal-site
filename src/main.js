//UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from "./index.js";

$(document).ready(function() {
  $('#create-entry').click(function(event){
    event.preventDefault();
    const title = "test";
    const body = "test";
    let entry = new Entry(title,body);
    console.log(entry);
    $('#posted-entry').append("<p>" + entry + "</p>");
  });
});