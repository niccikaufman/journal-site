//UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from "./index.js";

let entry, teaser;
$(document).ready(function() {
  $('#create-entry').click(function(event){
    event.preventDefault();
    const title = $('#entry-title').val();
    const body = $('#entry-body').val();
    entry = new Entry(title,body,teaser);
    entry.getTeaser();
    entry.wordCount();
    entry.vowelAndConsonantCount();
    $('#teaser-info').show();
    $('#teaser-title').append('<h6 class="card">' + entry.title + '<br>' + entry.teaser + '</h6>');
    $('#posted-entry-body').append('<p class="card">' + entry.body + '</p>');
  });
  $('#teaser-link').click(function(){
    $('#teaser-info').show();
    $('#posted-entry-body').toggle();
  });
});
