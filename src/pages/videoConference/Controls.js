import React from 'react';
import {
  VideocamOutlined,
  VideocamOffOutlined,
  MicNoneOutlined,
  MicOffOutlined,
  LogoutOutlined,
  PodcastsOutlined,
  StopCircleOutlined,
  PeopleOutlined,
  ScreenShareOutlined,
  StopScreenShareOutlined
} from '@mui/icons-material';
import { Tooltip } from '@mui/material/';
import { IconButton, Button } from '@mui/material';
import { selectHLSState, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { selectIsLocalAudioEnabled, selectIsLocalVideoEnabled, selectLocalPeer } from '@100mslive/react-sdk';
import ParticipantsCount from './ParticipantsCount';

function Controls() {
  const hmsActions = useHMSActions();
  const hlsState = useHMSStore(selectHLSState);
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const localPeer = useHMSStore(selectLocalPeer);

  const startHLSStreaming = async () => {
    try {
      await hmsActions.startHLSStreaming();
    } catch (err) {
      alert(`Falha ao iniciar o compartilhamento de câmera: ${err}`);
    }
  };

  const stopHLSStreaming = async () => {
    try {
      await hmsActions.stopHLSStreaming();
    } catch (err) {
      alert(`Falha ao parar o compartilhamento de câmera: ${err}`);
    }
  };

  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!audioEnabled);
  };

  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!videoEnabled);
  };

  const startScreenShare = async () => {
    try {
      await hmsActions.startScreenShare();
    } catch (err) {
      alert(`Falha ao iniciar o compartilhamento de tela: ${err}`);
    }
  };

  const stopScreenShare = async () => {
    try {
      await hmsActions.stopScreenShare();
    } catch (err) {
      alert(`Falha ao parar o compartilhamento de tela: ${err}`);
    }
  };

  const isScreenSharing = hlsState.screenSharingPeerId === localPeer.id;

  const leaveRoom = async () => {
    if (localPeer.roleName === 'broadcaster') {
      hmsActions.leave();
      await hmsActions.stopHLSStreaming();
    } else {
      hmsActions.leave();
    }
  };

  return (
    <div className="controls">
      {localPeer.roleName === 'broadcaster' && (
        <>
          <Tooltip title="Quantidade de pessoas">
            <IconButton>
              <PeopleOutlined />
            </IconButton>
          </Tooltip>
          <ParticipantsCount />
          <Tooltip title={audioEnabled ? 'Desativar áudio' : 'Ativar áudio'}>
            <IconButton onClick={toggleAudio}>
              {audioEnabled ? <MicNoneOutlined /> : <MicOffOutlined />}
            </IconButton>
          </Tooltip>
          <Tooltip title={videoEnabled ? 'Desativar vídeo' : 'Ativar vídeo'}>
            <IconButton onClick={toggleVideo}>
              {videoEnabled ? <VideocamOutlined /> : <VideocamOffOutlined />}
            </IconButton>
          </Tooltip>
          <Button variant="contained" disableElevation className="leave" onClick={leaveRoom}>
            <LogoutOutlined /> Sair da Sala
          </Button>
          {hlsState.running ? (
            <Tooltip title="Parar compartilhamento de câmera">
              <Button variant="contained" disableElevation className="leave" onClick={stopHLSStreaming}>
                <StopCircleOutlined /> Parar compartilhamento de Câmera
              </Button>
            </Tooltip>
          ) : (
            <Tooltip title="Compartilhar câmera">
              <Button variant="contained" disableElevation onClick={startHLSStreaming}>
                <PodcastsOutlined /> Compartilhar Câmera
              </Button>
            </Tooltip>
          )}
          <Tooltip title={isScreenSharing ? 'Parar compartilhamento de tela' : 'Compartilhar tela'}>
            <IconButton onClick={isScreenSharing ? stopScreenShare : startScreenShare}>
              {isScreenSharing ? <StopScreenShareOutlined /> : <ScreenShareOutlined />}
            </IconButton>
          </Tooltip>
        </>
      )}
      {localPeer.roleName !== 'broadcaster' && (
        <Button variant="contained" disableElevation className="leave" onClick={leaveRoom}>
          <LogoutOutlined /> Sair da Sala
        </Button>
      )}
    </div>
  );
}

export default Controls;
