//UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from "./index.js";

$(document).ready(function() {
  $('#create-entry').click(function(event){
    event.preventDefault();
    const title = $('#entry-title').val();
    const body = $('#entry-body').val();
    let entry = new Entry(title,body);
    entry.wordCount();
    entry.vowelCount();
    $('#posted-entry-title').append("<p>" + entry.title + "</p>");
    $('#posted-entry-body').append("<p>" + entry.body + "</p>");
  });
});