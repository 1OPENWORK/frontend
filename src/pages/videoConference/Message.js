import { selectLocalPeer, useHMSStore } from '@100mslive/react-sdk'

function Message({message}) {
  const localPeer = useHMSStore(selectLocalPeer)

  const senderName = message.senderUserId === localPeer.customerUserId ? 'você' : message.senderName;

  return (
    <div 
      className={`message ${message.senderUserId === localPeer.customerUserId && 'myMessage'}`}
    >
      <span>{senderName}</span>
      <p>{message.message}</p>
    </div>
  )
}

export default Message
