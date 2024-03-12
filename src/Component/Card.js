import "./card.css";
export default function Card(props){
    return (<div className="card">
        <img src ={props.icon} alt = "icon"/>
        <span>{props.title}</span>
        <span style={{
            color: "hsl(166, 100%, 37%)"
        }}><span style={{
            fontWeight : "bold",
            color :"hsl(234, 85%, 45%)",
            fontSize : "16px",

        }}>{props.grade}</span> / 100</span>
    </div>);
}