const Contact = ()=>{
    return (
        <div>
            <h1 className="p-4 m-4 text-3xl">Contact Us at +91 xxx xxx xx </h1>
            <div>
                <input className="border border-black rounded-xl p-4 m-4" placeholder="Name"/>
                <input className="border border-black rounded-xl p-4 m-4"  placeholder="Message"/>
                <button className="p-4 m-4 bg-black text-white rounded-lg">Submit</button>
            </div>
        </div>
    )
}

export default Contact;