import { ArrowBigDown, ArrowBigUp} from "lucide-react";

interface Transactions{
    description:string,
    date:string,
    amount:number,
    color:string,
    icons:React.ElementType
}

const transactions:Transactions[]=[
    {
        description:"Mike David",
        date:"Today 13:50",
        amount:250,
        icons:ArrowBigUp,
        color:"rgb(0,200,100)"
    },

    {
        description:"Cynthia Chioma",
        date:"Yesterday 10:50",
        amount:1250,
        icons:ArrowBigDown,
        color:"orangered"
    },

    {
        description:"Deposit Charges",
        date:"Yesterday 10:10",
        amount:10,
        icons:ArrowBigDown,
        color:"orangered"
    },

    {
        description:"Deposit",
        date:"Today 13:10",
        amount:5000,
        icons:ArrowBigUp,
        color:"rgb(0,200,100)"
    }
];

function Transactions(){
    return (<>
    {
                        transactions.map((keys) => (
                            <div className="tokenrow transactionrow">
                        <div className="divlogo trl"><b style={{color:`${keys.color}`}}><keys.icons /></b></div>
                        <div className="divname transact">
                            <span>{keys.description}</span>
                            <b>{keys.date}</b>
                        </div>
                        <div className="divamount transact2">
                            <span style={{color:`${keys.color}`}}>${keys.amount}</span>
                            
                        </div>
                    </div>
                        ))
                    }
    </>);
}

export default Transactions;
