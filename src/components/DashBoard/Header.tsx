import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataCOntext } from "../../App";
import { FaBell, FaSignOutAlt } from "react-icons/fa";
import NotificationComponent from "./Notification";
import axios from "axios";

type Notification = {
	id: number;
	message: string;
	date: string;
};

const Header = () => {
	const navigate = useNavigate();
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const userDataContextConsumer = useContext(UserDataCOntext);
	const firstName = userDataContextConsumer?.firstName;
	const lastName = userDataContextConsumer?.lastName;

	const [showNotifications, setShowNotifications] = useState(false);
	const [hasNewNotification, setHasNewNotification] = useState(false);

	useEffect(() => {
		if (notifications.length > 0) {
			setHasNewNotification(true);
		}
	}, [notifications]);

	const handleBellClick = () => {
		setShowNotifications(!showNotifications);
		setHasNewNotification(false);
	};

	useEffect(() => {
		const fetchNotifications = async () => {
			try {
				const response = await axios.get("/api/notifications");
				setNotifications(response.data);
			} catch (error) {
				console.error("Error fetching notifications:", error);
			}
		};

		fetchNotifications();
	}, []);

	return (
		<header className='bg-gray-100 rounded-xl w-full max-w-full shadow-md py-4 px-6 flex justify-between items-center mb-4'>
			<div
				className='flex items-center space-x-4 cursor-pointer'
				onClick={() => {
					navigate("/dashboard");
				}}
			>
				<h1 className='text-xl hover:text-red-300 capitalize text-neutral-600 orbitron font-bold'>
					DashBoard
				</h1>
			</div>

			<div className='flex gap-3 justify-between  items-center relative w-[30rem]'>
				<div className='text-gray-600 relative'>
					<FaBell
						className={`text-xl cursor-pointer transition-all ${
							hasNewNotification ? "text-red-500" : ""
						}`}
						onClick={handleBellClick}
					/>
					{hasNewNotification && (
						<span className='absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400'></span>
					)}
				</div>
				{showNotifications && (
					<NotificationComponent
						showNotification={setShowNotifications}
						notifications={notifications}
					/>
				)}
				<div className='flex flex-row-reverse items-center justify-between text-neutral-900 w-[20rem] h-full rounded-md p-2'>
					<FaSignOutAlt className='text-2xl cursor-pointer text-gray-500' title={"logout"} />
					<img
						src='/path-to-profile-pic.jpg'
						alt='Profile'
						className='w-8 h-8 rounded-full object-contain'
					/>
					<span className='capitalize text-neutral-600 orbitron'>
						{firstName && lastName ? `${firstName} ${lastName}` : "User"}
					</span>
				</div>
			</div>
		</header>
	);
};

export default React.memo(Header);
