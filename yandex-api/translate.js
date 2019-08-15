function Translate(word, language) {
    this.apikey = "trnsl.1.1.20190815T084224Z.cdf83d805d579c57.9a14dd763c67aca02568bb08fc6988098755d251";
    this.word = word;
    this.language = language;

    //xhr object
    this.xhr = new XMLHttpRequest();

}
Translate.prototype.translateWord = function(callback) {
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`
    this.xhr.open("GET", endpoint);
    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null, text);
        } else {
            callback("an error occured", null);
        }
    }

    this.xhr.send();
};
Translate.prototype.changeParameters = function(newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}
