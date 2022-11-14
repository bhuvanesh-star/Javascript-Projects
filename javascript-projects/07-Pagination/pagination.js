const ul = document.querySelector('ul');
let allPages = 15;

function elem(allPages, page){
    let li='';
    let previousPage =page - 1;
    let nextPage = page + 1;
    let liActive;
    if(page > 1){
        li += `<li class="btn" onclick="elem(allPages, ${page-1})" > <a class=" btn fas fa-angle-left"></a> </li>`
    }
    for(let pageLength = previousPage; pageLength<= nextPage; pageLength++){

        if(pageLength > page){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            liActive = 'active';
        }
        else{
            liActive='';
        }
        li += `<li class="num ${liActive}" onclick="elem(allPages,${pageLength})"> <span>${pageLength}</span> </li>`
    }


    if(page < allPages){
        li += `<li class="btn" onclick="elem(allPages, ${page+1})" > <a class=" btn fas fa-angle-right"></a> </li>`
    }

    ul.innerHTML = li;
}
elem(allPages,2)