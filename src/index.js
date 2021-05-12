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
  vowelCount(){
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
}
//   consonantCount(body){

//   }
//   //return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.
//   getTeaser(body){

//   }
// }
