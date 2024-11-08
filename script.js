replaceText(document.body)



function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
  
      
      const badWords = badWordsJson.RECORDS.map(record => record.word).join('|');
      const re = new RegExp(badWords, "gi");
  
      if (element.textContent.match(re)) {
        const newElement = document.createElement('span');
        newElement.innerHTML = element.textContent.replace(re, 
          '<span style="background-color:black;color:black;">cussword</span>');
        element.replaceWith(newElement);
      }
    }
  }
  
  replaceText(document.body);
