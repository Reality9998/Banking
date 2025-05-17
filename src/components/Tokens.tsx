
interface Tokens{
    name:string,
    amount:number,
    value:number,
    rate:number,
    abbr:string,
    color:string
}


const tokens:Tokens[] =[
    {
        name:"Grade",
        rate:0.1,
        amount:1000,
        value:100,
        abbr:"G",
        color:"orangered"
    },

    {
        name:"Drop",
        rate:0.02,
        amount:100,
        value:2,
        abbr:"D",
        color:"#003366"
    },

    {
        name:"Wolf",
        rate:0.001,
        amount:10000,
        value:10,
        abbr:"W",
        color:"#232323"
    },
];

function Tokens(){
    return (<>
        {
                        tokens.map((keys) => (
                            <div className="tokenrow">
                        <div className="divlogo"><span style={{background:"rgb(0,100,200)"}} >{keys.abbr}</span></div>
                        <div className="divname">
                            <span>{keys.name}</span>
                            <b>${keys.rate}</b>
                        </div>
                        <div className="divamount">
                            <span>{keys.amount}</span>
                            <b>${keys.value}</b>
                        </div>
                    </div>
                        ))
                    }
    </>);
}

export default Tokens;