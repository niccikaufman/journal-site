//UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from "./index.js";
var entry;
let id = 1;
var entryList = [];

function createEntryCard() {
  let teaserSection = document.createElement("div");
  teaserSection.className = 'teaser-section';
  teaserSection.innerHTML = `<p class="${entry.id} teaser-title card"></p><p class="entry-card" id="${entry.id}"></p>`;
  $('.container').append(teaserSection);
  entryList.forEach(element => {
    $(`.${element.id}`).text(element.title.toUpperCase());
    // $('.teaser').text(entry.teaser + ' ...');
    $(`#${element.id}`).text(element.body);
  });
}

$(document).ready(function() {
  $('#create-entry').on("click",function(event){
    event.preventDefault();
    const title = $('#entry-title').val();
    const body = $('#entry-body').val();
    entry = new Entry(title,body,id);
    entryList.push(entry);
    entry.id = id++;
    console.log(entry.id, entryList);
    createEntryCard();
    $('.teaser-section').show();
  });
});


