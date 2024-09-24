export const ShimmerCard= ()=>{
    return (
        <div className="hotel-card" >
             {/* style={{backgroundColor: "#FFFFF"}} */}
            <img className="hotel-card-pic"/>
            <h3>_______________</h3>
            <h4>_______________</h4>
            <h4>_______________ ___</h4>
            <h4>_______________</h4>
            <h4>_______________</h4>
        </div>
    )
}

const ShimmerContainer = ()=>{
    return (
        <div className="hotel-card-container">
            {
                [...Array(10)].map((val,index)=> <ShimmerCard key={index}/>)
            }
        </div>
    )
}

export default ShimmerContainer