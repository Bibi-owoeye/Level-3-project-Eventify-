import ion from '../assets/ion_ticket.png'
import free from '../assets/Free icon.png'
import date2 from '../assets/Date icon2.png'
import plusicon from '../assets/+- buttons.png'
import './Ticketing.css';

const Ticketing = () => {
  return (
    <div className="ticketing-container">
      <h2 className="ticketing-title">Ticketing Information</h2>
      <div style={{width:"748px", height:"49px", top:"559px", left:"150px", marginTop:"30px", marginLeft:"175px"}}>
        <p style={{fontWeight:"500", fontSize:"40px",  lineHeight:"48px", color:"#2D2C3C"}}>What type of event are you running?</p>
        </div>
        <div className='flex gap-3 align-center'>
            <div style={{width:"500px", height:"222px", border:"3px solid #2B293D", borderRadius:"10px", marginLeft:"175px", alignItems:"center", justifyContent:"center", textAlign:"center"}} className="mt-5 p-5">
            <img src={ion} alt=""  style={{marginLeft:"40%", width:"90px", height:"90px"}}/>
            <div className='align-middle min-w-80 '>
                <p style={{fontWeight:"600", fontSize:"22px", textAlign:"center", color:"#2B293D"}}>Ticketed Event</p>
                <p style={{fontWeight:"400", fontSize:"20px", textAlign:"center", color:"#2B293D"}}>My event requires tickets for entry</p>

            </div>
            </div>
            <div style={{width:"500px", height:"222px", border:"3px solid #2B293D", borderRadius:"10px", alignItems:"center", justifyContent:"center", textAlign:"center"}} className="mt-5 p-5">
            <img src={free} alt=""  style={{marginLeft:"40%", width:"90px", height:"90px"}}/>
            <div className='align-middle min-w-80 '>
                <p style={{fontWeight:"600", fontSize:"22px", textAlign:"center", color:"#2B293D"}}>Free Event</p>
                <p style={{fontWeight:"400", fontSize:"20px", textAlign:"center", color:"#2B293D"}}>I’m running a free event</p>

            </div>
            </div>
        </div>
        <div style={{width:"748px", height:"49px", top:"559px", left:"150px", marginTop:"30px", marginLeft:"175px"}}>
        <p style={{fontWeight:"500", fontSize:"40px",  lineHeight:"48px", color:"#2D2C3C"}}>What tickets are you selling?</p>
        </div>
        <div className='flex gap-5'>
        <div className="mt-5" style={{marginLeft:"175px"}}>
              <div style={{ fontWeight: "600", fontSize: "24px", lineHeight: "32.68px", color: "#2D2C3C" }}>Ticket details</div>
              <div className='flex gap-2 border-gray-100 mt-2' style={{ border: "1px solid", borderRadius: "6px", width: "500px" }}>
                <input type="text" style={{ border: 'none', position: "relative", background: "transparent", height: "48px", width: "100%", borderRadius: "1px", outline: "none" }} placeholder='Ticket Name e.g. General Admission' />
              </div>
            </div>


            <div className="mt-5">
              <div style={{ fontWeight: "600", fontSize: "24px", lineHeight: "32.68px", color: "#2D2C3C" }}>Ticket Price</div>
              <div className='flex gap-2 border-gray-100 mt-2' style={{ border: "1px solid", borderRadius: "6px", width: "330px" }}>
              <img src={date2} alt="" style={{ width: "58px", height: "48px", borderRadius: "6px" }} />
                <input type="text" style={{ border: 'none', position: "relative", background: "transparent", height: "48px", width: "100%", borderRadius: "1px", outline: "none" }} placeholder='0.00' />
              </div>
            </div>


            <div className=' w-full f'>
              <div className='' style={{ fontWeight: "600", fontSize: "24px", lineHeight: "32.68px", color: "#2D2C3C", marginTop:"69px", border:"none" }}>
                <img src={plusicon} alt=""  className='border float-center'/>
              </div>
            </div>

            </div>

            <div style={{display:"flex", alignItems:"center", marginLeft:"67%", gap:"10px"}} className='mt-9'>
            <button type="submit" style={{border:"none", padding:"10px", width:"113px", height:"53px", color:"#2B293D", fontSize:"20px", fontWeight:"600"}}>Go Back</button>
            <button type="submit" style={{border:"none", padding:"10px", width:"266px", height:"53px", color:"white", fontSize:"20px", fontWeight:"600", backgroundColor:"#2B293D", borderRadius:"6px"}}>Save & Continue</button>
          </div>
    </div>
  );
}

export default Ticketing;
