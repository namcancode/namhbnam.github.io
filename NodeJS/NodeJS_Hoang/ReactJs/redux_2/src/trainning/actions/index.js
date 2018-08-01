export  const status = () =>{
    return {
        type: "TOGGLE_STATUS"
    }
}

export  const sort = (sort) =>{
    return {
        type: "SORT",
        sort
    }
}