import { useHMSStore, selectPeers } from '@100mslive/react-sdk';

function ParticipantsCount() {
  const peers = useHMSStore(selectPeers);
  const participantsCount = peers.length;

  return (
    <div>
      <p>{participantsCount}</p>
    </div>
  );
}

export default ParticipantsCount;
