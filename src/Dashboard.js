export default function Dashboard(){
return (
    <div style={{
        display : "flex",
        flexDirection :"column",
        justifyContent : "center",
        alignItems : "center",
        gap : "30px",
        padding : "15px"
    }}>
        <p style={{
            fontSize :"30px",
            fontWeight : "500",
            textTransform :"capitalize"

        }}>your result</p>
        <div className="Ali"><span>76</span> of 100</div>
        <p style={{
            fontSize :"30px",
            fontWeight : "bold",
            textTransform :"capitalize"

        }}>Great</p>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
);
}