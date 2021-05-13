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
    entry.vowelAndConsonantCount();
    entry.getTeaser();
    $('#teaser-info').show();
    $('#teaser-title').append('<p class="card">' + entry.title + '<br>' + entry.teaser + '</p>');
    $('#posted-entry-body').append('<p class="card">' + entry.body + '</p>');
  });
  $('#teaser-link').click(function(){
    $('#teaser-info').show();
    $('#posted-entry-body').toggle();
  });
});
