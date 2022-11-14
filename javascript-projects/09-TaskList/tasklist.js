document.getElementById('addbtn').onclick = function()
{
if (document.querySelector('input').value.length == 0){
    alert("ADD TASK FIRST")
}
else{
    document.querySelector('#tasks').innerHTML +=`
    <div class="task">
        <span id="taskname">
            ${document.querySelector('#newTask input').value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
    `;
    var currentTask = document.querySelectorAll(".delete");
    for( var i=0; i<currentTask.length; i++){
        currentTask[i].onclick = function(){
            this.parentNode.remove();
        }
    };

   document.querySelector("#newTask input").value = "";

}
}