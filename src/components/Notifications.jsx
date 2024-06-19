import { useState,useEffect } from 'react'
import mark from '../assets/mark.webp'
import angela from '../assets/angela.webp'
import anna from '../assets/anna.webp'
import chess from '../assets/chess.webp'
import jacob from '../assets/jacob.webp'
import kimberly from '../assets/kimberly.webp'
import nathan from '../assets/nathan.webp'
import rizky from '../assets/rizky.webp'
import { FaCircle } from 'react-icons/fa'

const Notifications = ({isClicked, onCountUpdate}) => {
    useEffect(() => {
        if(isClicked === true || isClicked === false){
            const notifNumber = document.querySelectorAll('.bg-VLightGBlue');
            onCountUpdate(notifNumber.length);
        }
        
      }, [isClicked]);
    return (
        <div className="px-7 py-4">
            <div className={`flex justify-between rounded-lg items-center ${isClicked ? '' : 'bg-VLightGBlue'} mb-3 p-4`}>
                <img className="w-2/12 sm:w-1/12 self-start" src={mark} alt="" />
                <div className="w-9/12 sm:w-10/12 text-xs sm:mr-4">
                    <p className="text-DarkGBlue md:flex md:items-center"><span className="pr-1 hover:text-Blue cursor-pointer font-extrabold text-VeryDarkBlue">Mark Webber</span> reacted to your recent post <span className="font-extrabold pl-1 hover:text-Blue cursor-pointer">My first tournament today!</span>{!isClicked && <FaCircle className="text-Red inline-block ml-2" />}</p>
                    <span className="text-GBlue font-semibold">1m ago</span>
                </div>
            </div>
            <div className={`flex justify-between rounded-lg items-center ${isClicked ? '' : 'bg-VLightGBlue'} mb-3 p-4`}>
                <img className="w-2/12 sm:w-1/12 self-start" src={angela} alt="" />
                <div className="w-9/12 sm:w-10/12 text-xs sm:mr-4">
                    <p className="text-DarkGBlue md:flex md:items-center"><span className="pr-1 hover:text-Blue cursor-pointer font-extrabold text-VeryDarkBlue">Angela Gray</span> followed you {!isClicked && <FaCircle className="text-Red inline-block ml-2" />}</p>
                    <span className="text-GBlue font-semibold">5m ago</span>
                </div>
            </div>
            <div className={`flex justify-between rounded-lg items-center ${isClicked ? '' : 'bg-VLightGBlue'} mb-3 p-4`}>
                <img className="w-2/12 sm:w-1/12 self-start" src={jacob} alt="" />
                <div className="w-9/12 sm:w-10/12 text-xs sm:mr-4">
                    <p className="text-DarkGBlue md:flex md:items-center pb-1 font-semibold "><span className="pr-1 hover:text-Blue cursor-pointer font-extrabold text-VeryDarkBlue">Jacob Thompson</span> has joined your group <span className="font-extrabold text-Blue pl-1 cursor-pointer">Chess Club</span>{!isClicked && <FaCircle className="text-Red inline-block ml-2" />}</p>
                    <span className="text-GBlue font-semibold">1 day ago</span>
                </div>
            </div>
            <div className="flex justify-between rounded-lg items-center  mb-3 p-4">
                <img className="w-2/12 sm:w-1/12 self-start" src={rizky} alt="" />
                <div className="w-9/12 sm:w-10/12 text-xs sm:mr-4">
                    <p className="text-DarkGBlue"><span className="pr-1 hover:text-Blue cursor-pointer font-extrabold text-VeryDarkBlue">Rizky Hasanuddin</span> sent you a private message</p>
                    <span className="text-GBlue font-semibold">5 days ago</span>
                    <div className="mt-3 p-4 border hover:bg-LightGBlue1 cursor-pointer">
                        <p className="font-semibold text-DarkGBlue">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                            I'm already having lots of fun and improving my game.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between rounded-lg items-center  mb-3 p-4">
                <img className="w-2/12 sm:w-1/12 self-start" src={kimberly}alt="" />
                <div className="w-7/12 sm:w-8/12 text-xs sm:mr-8">
                    <p className="text-DarkGBlue"><span className="pr-1 hover:text-Blue cursor-pointer font-extrabold text-VeryDarkBlue">Kimberly Smith</span> commented on your picture</p>
                    <span className="text-GBlue font-semibold">1 week ago</span>
                </div>
                <img className="w-chess sm:w-1/12  hover:p-1 hover:border-2 rounded-lg hover:border-LightGBlue1 cursor-pointer" src={chess} alt="" />
            </div>
            <div class className="text-xs flex justify-between rounded-lg items-center  mb-3 p-4">
                <img className="w-2/12 sm:w-1/12 self-start" src={nathan} alt="" />
                <div className="w-9/12 sm:w-10/12 text-xs sm:mr-4">
                    <p className="text-DarkGBlue"><span className="pr-1 hover:text-Blue cursor-pointer font-extrabold text-VeryDarkBlue">Nathan Peterson</span> reacted to your recent post <span className="font-extrabold pl-1">5 end-game strategies to increase your win rate</span></p>
                    <span className="text-GBlue font-semibold">2 weeks ago</span>
                </div>
            </div>
            <div className="flex justify-between rounded-lg items-center  mb-3 p-4">
                <img className="w-2/12 sm:w-1/12 self-start" src={anna} alt="" />
                <div className="w-9/12 sm:w-10/12 text-xs sm:mr-4">
                    <p className="text-DarkGBlue "><span className="pr-1 hover:text-Blue cursor-pointer font-extrabold text-VeryDarkBlue">Anna Kim</span> left the group <span className="font-extrabold text-Blue pl-1">Chess Club</span></p>
                    <span className="text-GBlue font-semibold">2 weeks ago</span>
                </div>
            </div>
        </div>
    )
}

export default Notifications
