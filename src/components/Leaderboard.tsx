import { Star } from "lucide-react";

interface Lead{
    name:string,
    pic:string,
    star:number,
    point:number
}

const lead:Lead[]=[
    {
        name:"Real David",
        pic:"",
        star:5,
        point:5
    },
    {
        name:"Jack William",
        pic:"",
        star:4,
        point:4
    },
    {
        name:"Blessing Martins",
        pic:"",
        star:3,
        point:2
    },
];

function Leaderboard(){
    return (<>
    {
        
        lead.map((keys) => (

        
        <div className="leaderow">
            <div className="leadernumber">{lead.indexOf(keys)+1}</div>
            <div className="leaderpicture"></div>
            <div className="leaderdivv">
                <span>{keys.name}</span>
                <div className="stars">
                    {
                        Array.from({ length: 5 },(_, i)=> (
                            <Star
                             key={i}
                            size={17}
                             color={i < keys.star ? "rgb(250,250,150)" : "#555"}
                            fill={i < keys.star ? "rgb(250,250,150)" : "#555"}
                             
                             />
                    
                        ))
                    }

                </div>
            </div>
            <div className="leaderpoints">
                {keys.point}
            </div>
        </div>
        ))
}
    </>);
}

export default Leaderboard;