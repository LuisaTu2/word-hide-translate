const UNDERSCORE = "_"
const SPACE = " "
const DIV = "div"

window.onload = function(){
    // initialize consts and vars
    const inputText = document.getElementById("inputText")
    const textArea = document.getElementById("textArea")
    let seen = {}

    // helpers
    const onWordClick = (event) => {
        const id = event.target.id
        const element = document.getElementById(id)
        if(id in seen){
            element.innerHTML = seen[id]
            delete seen[id]
        } else {
            const word = element.textContent
            seen[id] = word
            const wordLength = word.length
            element.innerHTML = (UNDERSCORE + SPACE).repeat(wordLength - 1) + UNDERSCORE
        }
    }

    const createRow = (rowIndex) => {
        const row = document.createElement(DIV)
        row.setAttribute("id", String(rowIndex))
        row.className = "row"
        return row
    }

    const createWord = (text, rowIndex, columnIndex) => {
        const word = document.createElement(DIV);
        word.setAttribute("id", "r" + String(rowIndex) + "c" + String(columnIndex));
        word.innerHTML = text
        word.addEventListener("click", (e) => { onWordClick(e)})
        word.style.cursor = "pointer";
        return word
    }

    const createSpacer = () => {
        const span = document.createElement("span")
        span.innerHTML = "&nbsp"
        return span
    }

    const getUpdatedText = (inputText) => {
        const rows = inputText.split("\n")
        const text = document.createElement(DIV)

        for(let i = 0; i < rows.length; i++){
            const row = createRow(i)  // this is the row html element
            const words = rows[i].split(SPACE);
            for(let j = 0; j < words.length; j++){
                const word = createWord(words[j], i, j)
                const spacer = createSpacer();
                row.append(word)
                row.append(spacer)
            }
            text.append(row)
        }

        return text;
    }


    // main event listener
    inputText.addEventListener("input", (event) => {
        seen = {}
        const inputText = event.target.value
        const text = getUpdatedText(inputText)
        textArea.innerHTML = ""
        textArea.append(text)
    });
};

