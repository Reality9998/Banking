function Circle({val,bac}:{val:string,bac:string}){
    return (<>
        <div className="onediv" style={{width:"33%",height:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
            <div className="circle" style={{width:"50px",height:"50px",borderRadius:"50px",border:`2px solid ${bac}`,boxShadow:"0px 0px 10px",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"14px"}}>
                {val}
            </div>

            <b style={{color:"#ccc",fontWeight:"normal",fontSize:"13px"}}>Gradecoin</b>
        </div>
    </>);
}

export default Circle;