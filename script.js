replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }
    else if(element.nodeType === Text.TEXT_NODE){

        let cussWords = ["asshole","cunt","bastard","fuck","bitch","motherfucker","nigga","son of a bitch",];
        let text = cussWords.join('|')  // bastard|offensive
        var re = new RegExp(text, "gi")
        if(element.textContent.match(re)){
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(re,
            '<span style="background-color:black;color:black;">cussword</span>')
            element.replaceWith(newElement);
        }
    }
}
