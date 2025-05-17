function Circle({val,bac,name}:{val:string,bac:string,name:string}){
    return (<>
        <button className="onediv" style={{height:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",border:"none",outline:"none",background:"none",marginLeft:"20px"}}>
            <div className="circle" style={{width:"50px",height:"50px",borderRadius:"50px",boxShadow:`0px 0px 10px ${bac}`,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"12px"}}>
                {val}
            </div>

            <b style={{color:"#ccc",fontWeight:"normal",fontSize:"13px"}}>{name}</b>
        </button>
    </>);
}

export default Circle;