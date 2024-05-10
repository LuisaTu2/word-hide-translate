const UNDERSCORE = "_"
const SPACE = " "
const DIV = "div"
let seen = {}


const onWordClick = (event) => {
    const id = event.target.id
    const word = document.getElementById(id)
    if(id in seen){
        word.innerHTML = seen[id]
        delete seen[id]
        return
    } 
    
    let updatedText = ""
    const text = word.textContent
    for(i = 0; i < text.length; i++){
        c = text[i]
        if (!c.match(/^[0-9a-zA-Z]+$/)){
            updatedText += c
        } else {
            if (i == (text.length - 1)){
                updatedText += UNDERSCORE
            } else {
                updatedText += (UNDERSCORE + SPACE)
            }
        }
    }
    
    // not sure about <> but will leave for now, these are separators to indicate beginning and end of a word
    word.innerHTML = "<" + updatedText + "> "
    seen[id] = text
}

const createHTMLRow = (rowIndex) => {
    const row = document.createElement(DIV)
    row.setAttribute("id", String(rowIndex))
    row.className = "row"
    return row
}

const createHTMLWord = (text, rowIndex, columnIndex) => {
    const word = document.createElement(DIV);
    word.setAttribute("id", "r" + String(rowIndex) + "c" + String(columnIndex));
    word.innerHTML = text
    word.addEventListener("click", (e) => { onWordClick(e)})
    word.style.cursor = "pointer";
    return word
}

const createHTMLSpacer = () => {
    const span = document.createElement("span")
    span.innerHTML = "&nbsp"
    return span
}

const handleTextUpdate = (inputText) => {
    const rows = inputText.split("\n")
    const text = document.createElement(DIV)

    for(let i = 0; i < rows.length; i++){
        const row = createHTMLRow(i) 
        const words = rows[i].split(SPACE);
        for(let j = 0; j < words.length; j++){
            const word = createHTMLWord(words[j], i, j)
            const spacer = createHTMLSpacer();
            row.append(word)
            row.append(spacer)
        }
        text.append(row)
    }

    return text;
}

window.onload = function(){
    const inputText = document.getElementById("inputText")
    const textArea = document.getElementById("textArea")

    inputText.addEventListener("input", (event) => {
        seen = {}
        const inputText = event.target.value
        const text = handleTextUpdate(inputText)
        textArea.innerHTML = ""
        textArea.append(text)
    });
};

