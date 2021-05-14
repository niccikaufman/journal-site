//UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from "./index.js";
var entry;

function createTeaser() {
  $('#teaser-title').append('<p class="card">' + entry.title.toUpperCase() + '</p>');
  $('#teaser').append('<p>' + entry.teaser + ' . . . </p><br>');
  $('#posted-entry-body').append('<p>' + entry.body + '</p>');
}

$(document).ready(function() {
  $('#create-entry').click(function(event){
    event.preventDefault();
    const title = $('#entry-title').val();
    const body = $('#entry-body').val();
    entry = new Entry(title,body);
    entry.wordCount();
    entry.vowelAndConsonantCount();
    entry.getTeaser();
    $('#teaser-info').show(); 
    createTeaser();
  });
  $('#teaser-link').click(function(){
    $('#teaser-info').show();
    $('#teaser').toggle();
    $('#posted-entry-body').toggle();
  });
});


