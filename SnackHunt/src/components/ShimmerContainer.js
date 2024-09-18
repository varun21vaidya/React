const ShimmerCard= ()=>{
    return (
        <div className="hotel-card" >
            <img className="hotel-card-pic" style={{backgroundColor: "#FFFFF"}}/>
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
                [...Array(10)].map(()=> <ShimmerCard />)
            }
        </div>
    )
}

export default ShimmerContainer