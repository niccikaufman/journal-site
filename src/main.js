//UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from "./index.js";
var entry;

function createTeaser() {
  let teaserSection = document.createElement("div");
  teaserSection.className = 'teaser-section';
  teaserSection.innerHTML = '<p class="teaser-title card"></p><p class="entry-card"></p>'
  $('.container').append(teaserSection);
  $('.teaser-title').text(entry.title.toUpperCase());
  // $('.teaser').text(entry.teaser + ' ...');
  $('.entry-card').text(entry.body);
}

$(document).ready(function() {
  $('#create-entry').on("click",function(event){
    event.preventDefault();
    const title = $('#entry-title').val();
    const body = $('#entry-body').val();
    entry = new Entry(title,body);
    entry.wordCount();
    entry.vowelAndConsonantCount();
    entry.getTeaser();
    createTeaser();
    // $('.teaser-section').show(); 
    // $('.entry-card').show();
  });
  // $('.teaser').on("hover",function(){
  //   $('.teaser').hide();
  //   $('.entry-card').show();
  // });
});


