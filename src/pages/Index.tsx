import { Bell, ChevronLeft, Gamepad2, Settings, User } from "lucide-react";
import { useState } from "react";
import Transactions from "../components/Transaction";
import Tokens from "../components/Tokens";
import Circle from "../components/Circle";

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
        <div className="moreheader">
            <div className="headerbox">
                <ChevronLeft  onClick={() => morePage("homepage")}/>
                <span>Games</span>
                <i></i>
            </div>
        </div>
    </div>
        )
    }

{
        (page=="transactions") && (
        
    <div className="morepage">
        <div className="moreheader">
            <div className="headerbox">
                <ChevronLeft  onClick={() => morePage("homepage")}/>
                <span>Transactions</span>
                <i></i>
            </div>
        </div>

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
        <div className="moreheader">
            <div className="headerbox">
                <ChevronLeft  onClick={() => morePage("homepage")}/>
                <span>Profile</span>
                <i></i>
            </div>
        </div>


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
                        <Circle val={"50%"} bac="orangered" />
                        <Circle  val={"25%"} bac="lightgreen" />
                        <Circle  val={"17%"} bac="rgb(0,100,200)" />
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
        <div className="moreheader">
            <div className="headerbox">
                <ChevronLeft  onClick={() => morePage("homepage")}/>
                <span>Settings</span>
                <i></i>
            </div>
        </div>
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
                        <span>My Tokens</span>
                    </div>
                    
                    <Tokens />

                    
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