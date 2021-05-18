//UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from "./index.js";
var entry;

function createTeaser() {
  $('.teaser-section').prepend('<p class="teaser-card card"><a href="#" class="teaser-link teaser-title card">' + entry.title.toUpperCase() + '</a>');
  $('.teaser-section').append('<blockquote class="teaser">' + entry.teaser + ' . . . </blockquote><br>'); 
  $('.entry-card').append(entry.body);
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
    createTeaser();
    $('.teaser-section').show(); 
    $('.teaser').show();
  });
  $('.teaser-card').click(function(){
    $('.teaser').hide();
    // $('.entry-card').toggle();
  });
});


