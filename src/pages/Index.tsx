import { Bell, ChevronLeft, Gamepad2, Mail, Phone, Settings, User } from "lucide-react";
import { useState } from "react";
import Transactions from "../components/Transaction";
import Tokens from "../components/Tokens";
import Circle from "../components/Circle";
import Header from "../components/Header";
interface Tokenss{
    name:string,
    value:number,
    deposit:number,
    receive:number,
    abbr:string,
    color:string
}

const tokenss:Tokenss[]=[
    {
        name:"Grade",
        value:50000,
        deposit:20000,
        receive:5000,
        abbr:"GRD",
        color:"orangered"
    },

    {
        name:"Drop",
        value:3200,
        deposit:1000,
        receive:200,
        abbr:"DRP",
        color:"rgb(0,100,200)"
    },

    {
        name:"WOLF",
        value:3200,
        deposit:1000,
        receive:200,
        abbr:"WOL",
        color:"#f8f8f8"
    },
];
function Index(){
    const arr:string[]=[
        "Home","Tokens","Send","Receive","Withdraw","Deposit","Gifts"
    ];
    const games:string[]=[
        "Spin","Quiz","Guess Color"
    ];
    const [hovers, setHover] = useState<String>("Home");

    const[page, morePage]=useState("homepage");
    

    

    return (<>
    {
        (page=="mygames") && (
        
    <div className="morepage">
    <Header headerText="Games" goBack={() => morePage("homepage")} />
</div>
        )
    }

{
        (page=="transactions") && (
        
    <div className="morepage">
        <Header headerText="Transactions" goBack={() => morePage("homepage")} />

        <div className="morebody">
            <div className="middlebody">
            <Transactions />
            </div>
            
        </div>
    </div>
        )
    }

{
        (page=="profile") && (
        
    <div className="morepage">
        <Header headerText="Profile" goBack={() => morePage("homepage")} />



        <div className="morebody">
            <div className="middlebody">
                <div className="profiletop">
                    <div className="profilepic"></div>
                    <b>Rena Reality</b>
                    <span>realitydave@gmail.com</span>
                </div>

                <div className="tokenusage">
                    <span>Token Usage</span>
                    <div className="rowusage">
                        <div className="circleoverflow">
                            {
                                tokenss.map((keys) =>(
                                    <>
                                    <Circle val={"50%"} bac={keys.color} name={keys.name} />
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="tokenusage">
                    <span>Token Balance</span>

                    <div className="tokenbalance">
                    {
                    tokenss.map((keys)=>(
                    <>
                        <div className="mytrow">
                        <div className="tokenname">
                            <div className="tokenrowss">
                                <span>{keys.abbr}</span>
                                <b>{keys.value}</b>
                            </div>
                        </div>

                        <div className="tokenvalue">
                            <div className="valuetop">
                            <span>{keys.name}</span>
                            </div>

                            <div className="volumerow">
                                <div className="volumename">
                                <span>Deposit/Receive</span>
                                <span>Withdraw/Send</span>
                                    
                                </div>
                                <div className="topvolume">
                                    <span>{keys.deposit}</span>
                                    <span>{keys.receive}</span>
                                </div>

                                <div className="bottomvolume">
                                    <div className="lightgreen"></div>
                                    <div className="orangered"></div>
                                </div>
                            </div>
                        </div>
                        </div>

                        </>
                    )
                )
                    }
                  
                        
                    </div>
                </div>

                <div className="tokenusage">
                    <span>Personal Details</span>
                    <div className="personalrow">
                        <div className="personaleft">
                            <Mail size={19} />
                            
                            <span>Account ID</span>
                        </div>

                        <div className="personalright">
                            <span>8368253547485</span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <User size={19}/>
                            <span>Full Name</span>
                        </div>

                        <div className="personalright">
                            <span>Rena Reality</span>
                        </div>
                    </div>
                    <div className="personalrow">
                        <div className="personaleft">
                            <Phone size={19} />
                            <span>Phone Number</span>
                        </div>

                        <div className="personalright">
                            <span>+234(90)345 463 33</span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            <Mail size={19} />
                            <span>Email Address</span>
                        </div>

                        <div className="personalright">
                            <span>realdave@gmail.com</span>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
        )
    }

{
        (page=="settings") && (
        
    <div className="morepage">
<Header headerText="Settings" goBack={() => morePage("homepage")} />
</div>
        )
    }
{
    (page=="homepage") && (

    
    <main className="homepage">
        <header className="myheader">
            <div className="topheader">
                <div className="webname">
                    <h1>GRA<span>DES</span></h1>
                </div>

                <div className="webicon">
                    <Gamepad2 onClick={() => morePage("mygames")}/>
                    <Bell onClick={() => morePage("transactions")}/>
                    <User onClick={() => morePage("profile")}/>
                    <Settings onClick={() => morePage("settings")}/>
                    

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
                (hovers=="Tokens") && (
                    <>
                    <div className="othertokens">
                    <div className="tokenbox">
                        <Tokens />
                        </div>
                        </div>
                    </>
                )
            }
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
                        <span>My Gifts</span>
                    </div>
                    
                    <div className="giftform">
                        <form>
                            <div className="input">
                            <label>Input Your Gift ID</label>    
                                <input />
                            </div>
                            
                            <input type="submit" value="Check" />
                        </form>
                    </div>
                    

                    
                </div>
            </div>

            <div className="othertokens">
                <div className="tokenbox">
                    <div className="tokenhint">
                        <span>My Tokens</span>
                    </div>
                    
                    <Tokens />

                    
                </div>
            </div>

            <div className="othertokens" style={{display:"none",color:"red"}}>
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
                    
                    <Transactions />
                    
                    
                </div>
            </div>


            </>
                )
            }

            
            
        </div>
    </main>
    )
}
    </>);
}

export default Index;