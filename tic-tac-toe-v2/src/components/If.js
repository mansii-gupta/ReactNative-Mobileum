

const If=({condition,children})=>{

    if(condition)
        return children;
    else
        return null; //return null
};

export default If;