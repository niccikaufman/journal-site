//back end logic
export class Entry {
  constructor(title,body) {
    this.title = title;
    this.body = body;
  }
  wordCount() {
    let wordCount = 1;
    for (let i = 0; i <= this.body.length; i++) {
      if (this.body.charAt(i) == ' ') {
        wordCount++;
      }
    }
    console.log(wordCount);
  }
  vowelAndConsonantCount(){
    let vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;
    for(var i = 0; i < this.body.length ; i++) {
      if (vowels.indexOf(this.body[i]) !== -1) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
    console.log(vowelCount, consonantCount);
  }
  //return the first sentence of the entry.
  getTeaser(){
    let sentence = this.body.split(".");
    console.log(sentence[0]);
  }
}



