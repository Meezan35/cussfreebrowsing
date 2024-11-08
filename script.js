// fetch bad words JSON from the hosted API
fetch('https://meezan35.github.io/cussfreebrowsing/bad-words.json')
  .then(response => response.json())
  .then(badWordsJson => {

    replaceText(document.body, badWordsJson);
  })
  .catch(error => {
    console.error('There was an error fetching the bad words list:', error);
  });

// Function to replace cuss words in the element text content
function replaceText(element, badWordsJson) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(child => replaceText(child, badWordsJson));  // traversing DOM
    } else if (element.nodeType === Text.TEXT_NODE) {
        
        const badWords = badWordsJson.RECORDS.map(record => record.word).join('|');
        const re = new RegExp(badWords, "gi");
        
        if (element.textContent.match(re)) {
            
            const newElement = document.createElement('span');
            newElement.innerHTML = element.textContent.replace(re, 
                '<span style="background-color:black;color:black;">****</span>');
            element.replaceWith(newElement);
        }
    }
}
