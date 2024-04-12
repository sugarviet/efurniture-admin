import { Detector } from "react-detect-offline"

const CheckConntection = (props) => {
    return (
        <>
            <Detector
                render={({ online }) => (
                    online ? props.children : <NoInternet />
                )}
            />
        </>
    )
}


const NoInternet = () => {
    return (
        <div className="flex flex-col justify-center mx-auto items-center bg-white h-screen flex-1">
            <div className="w-36 h-36">
                <img src="https://t4.ftcdn.net/jpg/04/84/41/49/360_F_484414918_YvtzxDWwanztz7BJvRWzHmEp5hSb5jhj.jpg" className="w-full h-full"/>
            </div>
            <h1 className="font-bold text-xl">No Internet Connection</h1>
            <p className="text-gray-400 font-bold">Please check your connection and try again</p>
        </div>
    )
  }

export default CheckConntection