import { X } from "lucide-react";
function Heads({ headerText2, goBack }: { headerText2: string, goBack: () => void }) {
    return (
        <div className="moreheader">
            <div className="headerbox">
            <span>{headerText2}</span>
            <X onClick={goBack} />
                
                
            </div>
        </div>
    );
}
export default Heads;
