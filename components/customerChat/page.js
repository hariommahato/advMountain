"use client"
import React from 'react'
import WhatsAppWidget  from 'react-whatsapp-chat-widget'
import "react-whatsapp-chat-widget/index.css";
const CustomerChat = () => {
  return (
    <div>
      <WhatsAppWidget
			phoneNo="9779827617472"
			position="left"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt={"Hello"}
			iconSize="40"
			iconColor="white"
			iconBgColor="green"
			headerIcon="https://images.unsplash.com/photo-1673901736486-f3192b1df4a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="white"
			headerTitle="John Doe"
			headerCaption="Online"
			bodyBgColor="gray"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="#999"
			btnBgColor="green"
			btnTxtColor="white"
			btnTxt="Start Chat"
		/>
    </div>
  )
}

export default CustomerChat
