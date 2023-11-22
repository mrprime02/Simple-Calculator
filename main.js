
const displayData=(data)=> {
    result.value +=data
}
const calClear =()=>{
    result.value=""
}
const calResult=()=>{
    if(result.value!=""){
        try{
            result.value = eval(result.value)
    }catch{
        result.value ="----Syntax Error----"
    }
    }
}
const removeLast=()=>{
    result.value = result.value.slice(0,-1)
}