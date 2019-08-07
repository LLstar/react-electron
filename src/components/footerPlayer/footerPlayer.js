import React from 'react'
import ReactJkMusicPlayer from "react-jinke-music-player"
import "react-jinke-music-player/assets/index.css"
import './footerPlayer.less'

const options = {
  audioLists: [
    {
      name: "高尚",
      singer: "薛之谦",
      cover: "//cdn.lijinke.cn/nande.jpg",
      musicSrc: "//cdn.lijinke.cn/gaoshang.mp3"
    },
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover: "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc: () => {
        return Promise.resolve("http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3")
      },
    },
    {
      name: "Bedtime Stories",
      singer: "Jay Chou",
      cover: "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
      musicSrc: "http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3"
    },
    {
      name: "难得",
      singer: "安来宁",
      cover: "//cdn.lijinke.cn/nande.jpg",
      musicSrc: "//cdn.lijinke.cn/nande.mp3"
    }
  ],

  defaultPlayIndex: 0,
  theme: "dark",
  bounds: "body",
  preload: false,
  glassBg: false,
  remember: false,
  remove: true,
  defaultPosition: {
    top: 300,
    left: 120
  },
  playModeText: { // 播放模式
    order: "顺序播放",
    orderLoop: "列表循环",
    singleLoop: "单曲循环",
    shufflePlay: "随机播放"
  },
  openText: "打开",
  closeText: "关闭",
  notContentText: "暂无音乐",
  panelTitle: "播放列表",
  defaultPlayMode: "order", // 顺序播放
  mode: "full", // 模式
  once: true,
  autoPlay: false,
  toggleMode: false,
  showMiniModeCover: true,
  showMiniProcessBar: false,
  drag: true,
  seeked: true,
  showProgressLoadBar: true,
  showPlay: true,
  showReload: true,
  showDownload: true,
  showPlayMode: true,
  showThemeSwitch: false,
  showLyric: false,
  extendsContent: [],
  defaultVolume: 100,
  playModeShowTime: 600,
  loadAudioErrorPlayNext: true,
  // 播放
  onAudioPlay(audioInfo) {
    console.log("audio playing", audioInfo);
  },
  // 暂停
  onAudioPause(audioInfo) {
    console.log("audio pause", audioInfo);
  },
  onAudioSeeked(audioInfo) {
    console.log("audio seeked", audioInfo);
  },
  // 改变声音大小
  onAudioVolumeChange(currentVolume) {
    console.log("audio volume change", currentVolume);
  },
  onAudioAbort(e) {
    console.log("audio abort", e);
  },
  onAudioReload(audioInfo) {
    console.log("audio reload:", audioInfo);
  },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log("[currentPlayId] audio lists change:", currentPlayId);
    console.log("[audioLists] audio lists change:", audioLists);
    console.log("[audioInfo] audio lists change:", audioInfo);
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      "audio play track change:",
      currentPlayId,
      audioLists,
      audioInfo
    );
  },

  onAudioListsPanelChange(panelVisible) {
    console.log("audio lists panel visible:", panelVisible);
  },

  onAudioListsDragEnd(fromIndex, endIndex) {
    console.log("audio lists drag end:", fromIndex, endIndex);
  },

  onAudioLyricChange(lineNum, currentLyric) {
    console.log("audio lyric change:", lineNum, currentLyric);
  }
};

export default class FooterPlayer extends React.PureComponent {
  state = {
    params: options
  };
  onAddAudio = () => {
    const data = {
      ...this.state.params,
      audioLists: [
        ...this.state.params.audioLists,
        {
          name: "I'm new here",
          singer: "jack",
          cover: "http://www.lijinke.cn/music/1387583682387727.jpg",
          musicSrc: `http://www.lijinke.cn/music/${Date.now()}.mp3`
        }
      ]
    };
    this.setState({
      params: data
    });
  };
  extendsContent = () => {
    const data = {
      ...this.state.params,
    };
    this.setState({
      params: data
    });
  };
  onChangeKey = key => {
    const data = {
      ...this.state.params,
      [key]: !this.state.params[key]
    };
    this.setState({ params: data });
  };
  render() {
    const { params } = this.state;
    return (
      <div>
        <ReactJkMusicPlayer {...params} />
      </div>
    );
  }
}
