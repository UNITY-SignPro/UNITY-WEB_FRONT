import ReactPlayer from 'react-player/lazy';
// import video from "../자신.mp4";

const Video = (props) => {
    return (
        <>
                <ReactPlayer
                    className='react-player'
                    // url={process.env.PUBLIC_URL + '/자신.mp4'}    // 플레이어 url
                    url={`http://localhost:8000/tmp_video/${props.word}`}    // 플레이어 url
                    width='700px'         // 플레이어 크기 (가로)
                    height='466px'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    // muted={true}          // 음소거 on
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    pip={true}            // pip 모드 설정 여부
                
                    // onEnded={() => console.log("ending")}  // 플레이어 끝났을 때 이벤트
                />
        </>
    )
}

export default Video;