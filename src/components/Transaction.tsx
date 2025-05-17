import { ArrowBigDown, ArrowBigUp} from "lucide-react";

interface Transactions{
    description:string,
    date:string,
    amount:number,
    color:string,
    icons:React.ElementType,
    type:string
}

const transactions:Transactions[]=[
    {
        description:"Mike David",
        date:"Today 13:50",
        amount:250,
        icons:ArrowBigUp,
        color:"rgb(0,200,100)",
        type:"credit"
    },

    {
        description:"Cynthia Chioma",
        date:"Yesterday 10:50",
        amount:1250,
        icons:ArrowBigDown,
        color:"orangered",
        type:"debit"
    },

    {
        description:"Deposit Charges",
        date:"Yesterday 10:10",
        amount:10,
        icons:ArrowBigDown,
        color:"orangered",
        type:"debit"
    },

    {
        description:"Deposit",
        date:"Today 13:10",
        amount:5000,
        icons:ArrowBigUp,
        color:"rgb(0,200,100)",
        type:"credit"
    }
];

function Transactions({filterType}:{filterType:string}){
    const filteredTransactions = transactions.filter((t) => {
        if (filterType === "all") return true;
        return t.type === filterType;
      });
    return (<>
    {
        
        filteredTransactions.map((keys) => (
                          

<div className="leaderow">
<div className="leadernumber" style={{width:"15%"}}><keys.icons color={keys.color} fill={keys.color} /></div>

<div className="leaderdivv" style={{width:"60%"}}>
<b style={{fontSize:"14px",fontWeight:"normal",color:"white"}}>{keys.description}</b>
<span style={{fontSize:"12px",color:"#999"}}>{keys.date}</span>
</div>
<div className="leaderpoints" style={{border:"none",fontWeight:"normal",fontSize:"13px",width:"15%"}}>
   ${keys.amount}
</div>
</div>
                        ))
                    }
    </>);
}

export default Transactions;
