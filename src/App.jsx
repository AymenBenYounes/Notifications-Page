import { useState, useEffect } from 'react'
import Notifications from './components/Notifications'

function App() {
  const [countNotifications, setCountNotifications] = useState(0)
  const [isClicked, setIsClicked] = useState(false);
  const clearNotification = () => {
    setIsClicked(true)
  }
  useEffect(() => {
    if (isClicked) {
      setCountNotifications(0);
    }
  }, []);

  const handleNotificationCount = (onCountUpdate) => {
    setCountNotifications(onCountUpdate);
  };

  return (
    <div className="font-Jakarta w-container rounded-xl mx-auto bg-White max-w-screen-sm my-5">
      <div className="px-7 py-4 flex justify-between items-center">
        <div className="flex items-center w-5/12">
          <p className="text-VeryDarkBlue font-bold pr-2">Notifications</p>
          <span className="bg-Blue px-2 font-bold text-White rounded-md self-start">{countNotifications}</span>
        </div>
        <div className="w-4/12 text-right">
          <p className="text-sm text-DarkGBlue font-medium cursor-pointer hover:text-Blue hover:font-semibold" onClick={clearNotification}>Mark all as read</p>
        </div>
      </div>
      <Notifications isClicked={isClicked} onCountUpdate={handleNotificationCount}/>
    </div>
  )
}

export default App
