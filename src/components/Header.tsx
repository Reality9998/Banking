import Heads from "./Heads";
function Header({ headerText, goBack }: { headerText: string, goBack: () => void }) {
    return <Heads headerText2={headerText} goBack={goBack} />;
}
export default Header;
