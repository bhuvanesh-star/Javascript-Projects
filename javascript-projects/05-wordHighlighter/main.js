//charecters to be escaped{!@#$%^&*()-_+=[]\|""';:<>,.?/}

function search(){
    console.log('clickedas')
    let searchText = document.getElementById("text-to-search").value;
    let paragraph = document.getElementById("para");

    searchText = searchText.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${searchText}`, "gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}