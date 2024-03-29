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
        const word = document.getElementById(id)
        if(id in seen){
            word.innerHTML = seen[id]
            delete seen[id]
        } else {
            const text = word.textContent
            let updatedText = ""
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
            // // Add a separator in case there are two contiguous hidden words -- ouf not as easy so leave as a TODO
            // const position = id.split("c")
            // const prev = position[0] + "c" + String(parseInt(position[1]) - 1)
            // if (prev in seen){
            //     updatedText = "· " + updatedText
            // }

            // not sure about <> but will leave for now
            word.innerHTML = "<" + updatedText + "> "
            seen[id] = text
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

