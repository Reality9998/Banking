import { ArrowBigDown, ArrowBigUp, Bell, Gamepad2, Settings, User } from "lucide-react";
import { useState } from "react";

interface Tokens{
    name:string,
    amount:number,
    value:number,
    rate:number,
    abbr:string,
    color:string
}

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

function Index(){
    const arr:string[]=[
        "Home","Wallet","Send","Receive","Withdraw","Deposit","Gifts"
    ];
    const games:string[]=[
        "Spin","Quiz","Guess Color"
    ];
    const [hovers, setHover] = useState<String>("Home");

    
    

    

    return (<>
    <main>
        <header className="myheader">
            <div className="topheader">
                <div className="webname">
                    <h1>DD<span>GAMING</span></h1>
                </div>

                <div className="webicon">
                    <Gamepad2 />
                    <Bell />
                    <User />
                    <Settings />
                    

                </div>
            </div>

            <div className="menuheader">
                <div className="overflowheader">
                    {
                        arr.map((keys)=> (
                            <button style={{background : hovers == `${keys}` ? "linear-gradient(to right, orangered, brown)" : "#232323"}} onClick={()=>setHover(`${keys}`)}>{keys}</button>
                        )

                        )
                    }
                
                </div>
            </div>
        </header>
        
        <div className="bodydiv">
            {
                (hovers=="Home") && (
                    <>
                    <div className="amountdiv">
                <div className="amountbox">
                    <span>Total Balance</span>
                    <h1>$56,000 <b>USD</b></h1>
                </div>
            </div>

            <div className="othertokens">
                <div className="tokenbox">
                    <div className="tokenhint">
                        <span>My Tokens</span>
                    </div>
                    {
                        tokens.map((keys) => (
                            <div className="tokenrow">
                        <div className="divlogo"><span style={{background:`${keys.color}`}} >{keys.abbr}</span></div>
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
                    

                    
                </div>
            </div>

            <div className="othertokens">
                <div className="tokenbox">
                    <div className="tokenhint">
                        <span>My Games</span>
                    </div>

                    <div className="mygames">
                        {
                            games.map((keyss) =>(
                                <button>{keyss}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="othertokens">
                <div className="tokenbox">
                    <div className="tokenhint">
                        <span>Recent Transactions</span>
                    </div>
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
                    

                    
                </div>
            </div>


            </>
                )
            }
            
        </div>
    </main>
    </>);
}

export default Index;