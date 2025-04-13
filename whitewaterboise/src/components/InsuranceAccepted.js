import Aetna from "./statics/Aetna.png"
import bci_logo from "./statics/bci_logo.png"
import pacificsource from "./statics/pacificsource.png"
import mountainhealth from "./statics/mountainhealth.png"
import regence from "./statics/regence.png"
import select_health from "./statics/select_health.png"
import tricare from "./statics/tricare.png"
const InsuranceAccepted = () => {

    return (
        <div>
            <div className='text-center mt-2 mb-5 text-xl'><strong>We Accept Most Major Insurances:</strong></div>
            <div className='flex flex-col  md:flex-row items-center justify-center mb-5 '>
                <div className='w-sm w-20 mr-5 ml-2 mt-2' >
                    <img className="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/89b2219b/61810025-0-blue-cross-blue-shie.png" srcSet="//v.fastcdn.co/u/89b2219b/61810025-0-blue-cross-blue-shie.png 2x" />
                </div>
                <div className='w-30 mr-5 mt-3' >
                    <img className="item-content-box item-block image " data-at="image" alt="" src={Aetna} />
                </div>
                <div className='w-30 mr-5 mt-3' >
                    <img className="item-content-box item-block image " data-at="image" alt="" src={bci_logo} />
                </div>
                <div className='w-30 mr-5 mt-3' >
                    <img className="item-content-box item-block image " data-at="image" alt="" src={pacificsource} />
                </div>
                <div className='w-30 mr-5 mt-3' >
                    <img className="item-content-box item-block image " data-at="image" alt="" src={mountainhealth} />
                </div>
                <div className='w-30 mr-5 mt-3' >
                    <img className="item-content-box item-block image " data-at="image" alt="" src={regence} />
                </div>
                <div className='w-30 mr-5 mt-3' >
                    <img className="item-content-box item-block image " data-at="image" alt="" src={select_health} />
                </div>
                <div className='w-30 mr-5 mt-3' >
                    <img className="item-content-box item-block image " data-at="image" alt="" src={tricare} />
                </div>
                <div className='w-sm w-20 mt-3'>
                    <img className="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/89b2219b/61810211-0-Cigna-logo.svg.png" srcSet="//v.fastcdn.co/u/89b2219b/61810211-0-Cigna-logo.svg.png 2x"></img>
                </div>

            </div>
            {/* <div className=" text-xs" >* Medcaid medcare not accepted </div> */}
        </div>
    )


}
export default InsuranceAccepted;



