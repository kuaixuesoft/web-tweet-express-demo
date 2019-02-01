
function aworker(v,task){
    console.log('working:', task)
    v("done")
}

function assigntask(task){
    function v(status){
        console.log(status)
    }
    aworker(v,task)
}

let task = "task 1";
assigntask(task)






