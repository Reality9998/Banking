import { Bell, CircleArrowOutDownRightIcon, CircleDollarSign, Contact, Currency, CurrencyIcon, Facebook, HelpCircle, Home, Info, Instagram, Key, LucideCurrency, Mail, Menu, Pencil, Phone, Settings, Share, Star, ThermometerIcon, Trophy, Twitter, User, X } from "lucide-react";
import { useState } from "react";
import Transactions from "../components/Transaction";
import Tokens from "../components/Tokens";
import Circle from "../components/Circle";
import Header from "../components/Header";
import Leaderboard from "../components/Leaderboard";
import Images from "../image/messi.jpeg";

interface Graders{
    pic:string,
    txt:string
}

const graders:Graders[]=[
    {pic:"orange",txt:"User 1"},
    {pic:"silver",txt:"User 2"},
    {pic:"brown",txt:"User 3"},
    {pic:"rgb(0,100,200)",txt:"User 4"},
    {pic:"rgb(0,200,100)",txt:"User 5"},
    {pic:"purple",txt:"User 6"},
    
];

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
        "Home","Tokens","Transactions","Send","Sell","Buy","Gifts"
    ];
    const games:string[]=[
        "Spin","Quiz","Guess Color"
    ];
    const [hovers, setHover] = useState<String>("Home");

    const[page, morePage]=useState("homepage");
    
            const [ff, choseFilter]=useState("all");                      
    const [opend,openDiv]=useState("");
    const [sell, setSell]=useState("token");
    const [buy, setBuy]=useState("token");

    return (<>
    {
        (page=="leaderboard") && (
        
    <div className="morepage">
    <Header headerText="Leaderboard" goBack={() => morePage("menu")} />
    <div className="morebody">
        <div className="middlebody">
            <div className="hintleader">
                The leaderboard is base on most grade points. Prize attached to the top 10 graders in the last 30 days. The reward is in the first day of the month.
            </div>

            <div className="leaderbutton">
                <button>All</button>
                <button>Last 30 days</button>
                <button>Last 7 days</button>
                <button>Today</button>
            </div>

            <div className="fromleader">Top 100</div>
            <Leaderboard />
            
        </div>
    </div>
    </div>

        )
    }

{
        (page=="notification") && (
        
    <div className="morepage">
        <Header headerText="Notification" goBack={() => morePage("homepage")} />
        
        <div className="morebody">
            <div className="middlebody">
            
            

            <div className="searchnotification">
                <input placeholder="Search..." />
            </div>
            {[1,2].map(()=>(

            
            <div className="notificationrow">
                <div className="sidenot1">
                    <span>
                        <Home size={20} color="#999" />
                    </span>
                </div>

                <div className="sidenot2">
                    <div className="topside">
                        <span>Maintenance request update</span>
                        <b>5h ago</b>
                    </div>

                    <div className="bottomside">
                        <span>
                        You sign up as a grader. Your AccountId is #7467274678384. Click to see more details
                        </span>
                    </div>
                </div>
            </div>
            ))
}
            </div>
            
        </div>
    </div>
        )
    }

{
        (page=="profile") && (
        
    <div className="morepage">
        <Header headerText="Profile" goBack={() => morePage("menu")} />



        <div className="morebody">
            <div className="middlebody">
                <div className="profiletop">
                    <div className="profilepic">
                        <img src={Images} alt="" />

                    </div>
                    <b>Rena Reality</b>
                    <span>realitydave@gmail.com</span>
                </div>

                <div className="tokenusage">
                    <span className="rowblue">Token Usage</span>
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
                    <span className="rowblue">Token Balance</span>

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
                    <span className="rowblue">Personal Details</span>
                    <div className="personalrow">
                        <div className="personaleft">
                            <Mail size={19} />
                            
                            <span>Account ID</span>
                        </div>

                        <div className="personalright">
                            <span><input type="button" value="8368253547485" /></span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <User size={19}/>
                            <span>Full Name</span>
                        </div>

                        <div className="personalright">
                            <span><input type="button" value="Rena Reality" /></span>
                        </div>
                    </div>
                    <div className="personalrow">
                        <div className="personaleft">
                            <Phone size={19} />
                            <span>Phone Number</span>
                        </div>

                        <div className="personalright">
                            <span><input type="button" value="+234(90)345 463 33" /></span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            <Mail size={19} />
                            <span>Email Address</span>
                        </div>

                        <div className="personalright">
                            <span><input type="button" value="realdave@gmail.com" /></span>
                        </div>
                    </div>

                    <div className="hintdiv">
                        <span>Double tap to edit your details.</span>
                    </div>
                </div>
                

                <div className="tokenusage">
                    <span className="rowblue">Account Information</span>
                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Total Balance</span>
                        </div>

                        <div className="personalright">
                            <span>$56,000.00</span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Date Joined</span>
                        </div>

                        <div className="personalright">
                            <span>10th January, 2025</span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Grade Point</span>
                        </div>

                        <div className="personalright">
                            <span>0</span>
                        </div>
                    </div>


                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Star <Star size={15} fill="yellow" /></span>
                        </div>

                        <div className="personalright">
                            <span>0</span>
                        </div>
                    </div>


                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Number of Deposit</span>
                        </div>

                        <div className="personalright">
                            <span>0</span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Number of Withdraw</span>
                        </div>

                        <div className="personalright">
                            <span>0</span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Total Transfer</span>
                        </div>

                        <div className="personalright">
                            <span>0</span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Total Received</span>
                        </div>

                        <div className="personalright">
                            <span>0</span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Total Gift Created</span>
                        </div>

                        <div className="personalright">
                            <span>0</span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Total Gift Received</span>
                        </div>

                        <div className="personalright">
                            <span>0</span>
                        </div>
                    </div>
                </div>


                <div className="tokenusage">
                    <span className="rowblue">Withdrawal Details</span>
                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Account No.</span>
                        </div>

                        <div className="personalright">
                            <span><input type="button" value="3134043841" /></span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Account Name.</span>
                        </div>

                        <div className="personalright">
                            <span><input type="button" value="David Real" /></span>
                        </div>
                    </div>

                    <div className="personalrow">
                        <div className="personaleft">
                            
                            <span>Bank Name</span>
                        </div>

                        <div className="personalright">
                            <span><input type="button" value="First Bank" /></span>
                        </div>
                    </div>

                    <div className="hintdiv">
                        <span>Double tap to edit bank details.</span>
                    </div>
                </div>

                


            </div>
            
        </div>
    </div>
        )
    }

{
        (page=="menu") && (
        
    <div className="morepage">
<Header headerText="Menu" goBack={() => morePage("homepage")} />
<div className="morebody">
            <div className="middlebody">
                <div className="apphint">
                    
                </div>

                <div className="settingrow"  onClick={() => morePage("profile")}>
                    <div className="setting1">
                        <User />
                    </div>

                    <div className="setting2">
                        <span>Profile</span>
                        <b>Edit Details</b>
                    </div>
                </div>

                <div className="settingrow"  onClick={() => morePage("leaderboard")}>
                    <div className="setting1">
                        <Trophy />
                    </div>

                    <div className="setting2">
                        <span>Leaderboard</span>
                        <b>Row: 100</b>
                    </div>
                </div>

                <div className="settingrow" onClick={() => openDiv("theme")}>
                    <div className="setting1">
                        <Settings />
                    </div>

                    <div className="setting2">
                        <span>Theme</span>
                        <b>System default</b>
                    </div>
                </div>
                {
                    (opend=="theme") && (
                        <>
                            <div className="teamcontainer">
                                <div className="teaminside themecover">
                                    <div className="teaminside1" onClick={() => openDiv("")}></div>
                                    <div className="teaminside2">
                                        <div className="themetitle">
                                            <span>Theme</span>
                                        </div>

                                        <form>
                                        <div className="inputheme">
                                            <input type="radio" name="theme" />
                                            <span>System default</span>
                                        </div>

                                        <div className="inputheme">
                                            <input type="radio" name="theme" />
                                            <span>Light</span>
                                        </div>

                                        <div className="inputheme">
                                            <input type="radio" name="theme" />
                                            <span>Dark</span>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                

                <div className="settingrow" onClick={() => openDiv("currency")}>
                    <div className="setting1">
                        <CircleDollarSign />
                    </div>

                    <div className="setting2">
                        <span>Currency</span>
                        <b>US Dollar (USD)</b>
                    </div>
                </div>
                {
                    (opend=="currency") && (
                        <>
                            <div className="teamcontainer">
                                <div className="teaminside themecover">
                                    <div className="teaminside1" onClick={() => openDiv("")}></div>
                                    <div className="teaminside2">
                                        <div className="themetitle">
                                            <span>Currency</span>
                                        </div>

                                        <form>
                                        <div className="inputheme">
                                            <input type="radio" name="theme" />
                                            <span>US Dollar (USD)</span>
                                        </div>

                                        <div className="inputheme">
                                            <input type="radio" name="theme" />
                                            <span>Euro (EUR)</span>
                                        </div>

                                        <div className="inputheme">
                                            <input type="radio" name="theme" />
                                            <span>Naira (NGN)</span>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                <div className="apphint">
                    <span>Security</span>
                </div> 

                <div className="settingrow">
                    <div className="setting1">
                        
                        <Key />
                    </div>

                    <div className="setting2">
                        <span>Enable Pin</span>
                        <b>Set up your 4 digits pin for transactions</b>
                    </div>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                        
                        <Key />
                    </div>

                    <div className="setting2">
                        <span>Change Password</span>
                    </div>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                        <Pencil />
                    </div>

                    <div className="setting2">
                        <span>Edit Details</span>
                    </div>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                        <Pencil />
                    </div>

                    <div className="setting2">
                        <span>Set Up Withdrawal</span>
                    </div>
                </div>
                
                 <div className="apphint">
                    <span>Engagement</span>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                        <Share />
                    </div>

                    <div className="setting2">
                        <span>Invite Others</span>
                        <b>Get grade points from your invites</b>
                    </div>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                        <Twitter />
                    </div>

                    <div className="setting2">
                        <span>Follow us on X</span>
                        <b>Get a point</b>
                    </div>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                        <Instagram />
                    </div>

                    <div className="setting2">
                        <span>Follow us on Instagram</span>
                        <b>Get a point</b>
                    </div>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                    
                        <Facebook />
                    </div>

                    <div className="setting2">
                        <span>Follow us on Facebook</span>
                        <b>Get a point</b>
                    </div>
                </div>

                <div className="apphint">
                    <span>Other</span>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                        <Info />
                    </div>

                    <div className="setting2">
                        <span>About US</span>
                        <b>View more about Grade</b>
                    </div>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                        <Contact />
                    </div>

                    <div className="setting2">
                        <span>Contact Us</span>
                    </div>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                        <HelpCircle />
                    </div>

                    <div className="setting2">
                        <span>Tips and Support</span>
                    </div>
                </div>

                <div className="settingrow">
                    <div className="setting1">
                        <CircleArrowOutDownRightIcon />
                    </div>

                    <div className="setting2">
                        <span>Terms and Condition</span>
                    </div>
                </div>

                <div className="logoutdiv">
                    <button>Logout</button>
                </div>

                    
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
                    <div className="homedp">
                        <img src={Images} />
                    </div>
                    <div className="homedetails">
                        <span>Sagimatu, Halavaro</span>
                        <b>Welcome back</b>
                    </div>
                </div>

                <div className="webicon">
                    {/* <span onClick={() => morePage("leaderboard")}><Trophy color="#f8f8f8" size={20}/></span> */}
                    <span onClick={() => morePage("notification")} ><Bell color="#f8f8f8" size={20}/></span>
                   {/*  <span onClick={() => morePage("profile")}><User color="#999" size={20}/></span> */}
                    <span onClick={() => morePage("menu")}><Menu color="#f8f8f8" size={20}/></span>
                    

                </div>
            </div>

            <div className="menuheader">
                <div className="overflowheader">
                    
                    {
                        arr.map((keys)=> (
                            <button style={{background : hovers == `${keys}` ? "linear-gradient(to right, rgb(0, 200, 250), rgb(0, 100, 200))" : "#232323"}} onClick={()=>setHover(`${keys}`)}>{keys}</button>
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
                (hovers=="Transactions") && (
                    <>
                    <div className="othertokens">
                    <div className="tokenbox">
                        
            <div className="leaderbutton" style={{marginBottom:"20px"}}>
            <button  className={ff === "all" ? "active" : ""} onClick={()=>choseFilter("all")}>All</button>
                <button onClick={()=>choseFilter("credit")}>Credit</button>
                <button onClick={()=>choseFilter("debit")}>Debit</button>
                
            </div>
            <Transactions filterType={ff} />
                        </div>
                        </div>
                    </>
                )
            }
            {
                (hovers=="Send") && (
                    <>
                        <div className="othertokens">
                        <div className="tokenbox">
                            <form className="sendfund">
                                <label>Input friend's user id</label>
                                <input />
                                <div className="returndata">
                                    {/* <b>Rena Reality</b> */}
                                    <span>No User Found</span>
                                </div>
                                <button>Continue</button>
                            </form>
                            
                            <div className="recentreceip">
                                <span>Recent Transactions</span>
                                <Transactions filterType={ff} />
                            </div>
                        </div>
                        </div>
                    </>
                )
            }

            {
                
                (hovers=="Sell") && (
                    <>
                        <div className="othertokens">
                        <div className="tokenbox">
                            <div className="sellcrypto">
                                <span style={{background: sell=="token" ? "#232323":"none",color:sell=="token" ? "":"#999"}} onClick={()=>setSell("token")}>Sell Token</span>
                                <span style={{background: sell=="withdraw" ? "#232323":"none",color:sell=="withdraw" ? "":"#999"}} onClick={()=>setSell("withdraw")}>Withdraw to bank</span>
                            </div>

                            <div className="sellarea">
                                {
                                    (sell=="token") && (
                                        <>
                                        <form className="formtoken">
                                            <div className="eachtoken">
                                                <div className="sellpoint" style={{background: "linear-gradient(150deg, rgb(100,250,200),rgb(0,200,100))"}}></div>
                                                <div className="selldata">
                                                    <span>Grades</span>
                                                    <b>50,000</b>
                                                </div>
                                                <form className="formsss">
                                                    <input value="0.00"/>
                                                    <label>$ 0</label>
                                                </form>
                                            </div>
                                            <button>SELL</button>
                                        </form>

                                        <form className="formtoken">
                                            <div className="eachtoken">
                                                <div className="sellpoint" style={{background: "linear-gradient(150deg, rgb(100,200,250),rgb(0,100,200))"}}></div>
                                                <div className="selldata">
                                                    <span>Drop</span>
                                                    <b>50,000</b>
                                                </div>
                                                <form className="formsss">
                                                    <input value="0.00"/>
                                                    <label>$ 0</label>
                                                </form>
                                            </div>
                                            <button>SELL</button>
                                        </form>

                                        <form className="formtoken">
                                            <div className="eachtoken">
                                                <div className="sellpoint" style={{background: "linear-gradient(150deg, rgb(250,200,100),rgb(200,100,0))"}}></div>
                                                <div className="selldata">
                                                    <span>Wolf</span>
                                                    <b>50,000</b>
                                                </div>
                                                <form className="formsss">
                                                    <input value="0.00"/>
                                                    <label>$ 0</label>
                                                </form>
                                            </div>
                                            <button>SELL</button>
                                        </form>

                                        <div className="cartdiv">
                                            <span>Cart</span>
                                            <div className="catheader">
                                                <span>Items</span>
                                                <span>Price</span>
                                                <span></span>
                                            </div>
                                            {
                                                [1,2,3].map(()=>(

                                                
                                                <div className="cartrow">
                                                <div className="cat1">
                                                    <span>Grade</span>
                                                    <b>12th Dec 2025</b>
                                                </div>

                                                <div className="cat2">
                                                    <span>$ 50</span>
                                                    <b>5000000</b>
                                                </div>

                                                <div className="cat3">
                                                    <button>Remove</button>
                                                </div>
                                            </div>
                                            ))
                                            }
                                        </div>
                                        </>
                                    )
                                }

                                {
                                    (sell=="withdraw") &&(
                                        <>
                                <form className="sendfund withdrawfund">
                                <label>Type the amount you wish to withdraw</label>
                                <input />
                                <label>Select token type you wish to withdraw from</label>
                                <select>
                                    <option>Grade</option>
                                    <option>Drop</option>
                                    <option>Wolf</option>
                                </select>
                                <div className="returndata withd">
                                
                                    <span>Set Up Withdrawal Details</span>
                                </div>
                                <button>Continue</button>
                            </form>
                                        
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        </div>
                    </>
                )
            }

            {
                (hovers=="Buy") && (
                    <>
                    <div className="othertokens">
                        <div className="tokenbox">
                            <div className="sellcrypto">
                                <span style={{background: buy=="token" ? "#232323":"none",color:buy=="token" ? "":"#999"}} onClick={()=>setBuy("token")}>Internal Purchase</span>
                                <span style={{background: buy=="withdraw" ? "#232323":"none",color:buy=="withdraw" ? "":"#999"}} onClick={()=>setBuy("withdraw")}>External Purchase</span>
                            </div>

                            <div className="sellarea">
                                {
                                    (buy=="token") && (
                                        <>
                                            <div className="mybalances">
                                                <span>Balance: $ 50.00</span>
                                            </div>

                                            <div className="cartdiv">
                                            <span>One click</span>
                                            <div className="catheader">
                                                <span>Items</span>
                                                <span>Price</span>
                                                <span></span>
                                            </div>
                                            {
                                                [1,2,3].map(()=>(

                                                
                                                <div className="cartrow">
                                                <div className="cat1">
                                                    <span>Grade</span>
                                                    <b>From: Rena, Reality</b>
                                                </div>

                                                <div className="cat2">
                                                    <span>$ 50</span>
                                                    <b>5000000</b>
                                                </div>

                                                <div className="cat33">
                                                    <button>Buy</button>
                                                </div>
                                            </div>
                                            ))
                                            }
                                        </div>
                                        </>
                                    )
                                }
                            </div>
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
                    <span>Balance</span>
                    <h1>$56,000</h1>
                </div>
                <div className="creditlimit">
                    <div className="limitbar">
                        <div className="movinglimit" style={{width:`${20}%`}}></div>
                    </div>

                    <div className="limitext">
                        <span>Credit Limit</span>
                        <span>$ 200 / $1000</span>
                    </div>
                </div>
            </div>

            <div className="othertokens">
            <div className="tokenbox">
                    <div className="tokenhint">
                        <span>Check Gift</span>
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



            <div className="othertokens" style={{display:"none"}}>
            <div className="tokenbox">
                    <div className="tokenhint">
                        <span></span>
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
                    
                    <Transactions filterType="all" />
                     
                    
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