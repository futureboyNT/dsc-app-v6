import Image from 'next/image'
const SidebarLeft = () => {
    return (
        <div style={{ flexBasis: "15%", textAlign: "center", background: "#C1C1C1" }}>
            <div>
                <a href="https://discord.gg/dogesoundclub"><img src="/login.png" style={{width: "100%"}}/></a>
            </div>
            <div style={{padding: "10px"}}>
                <a href="https://discord.gg/dogesoundclub"><img src="/banner.gif" style={{width: "100%"}}/></a>
            </div>
            <div style={{padding: "10px"}}>
                <a href="https://opensea.io/collection/portal-engine"><img src="/engine.gif" style={{width: "100%"}}/></a>
            </div>
        </div>
    );
};
export default SidebarLeft;