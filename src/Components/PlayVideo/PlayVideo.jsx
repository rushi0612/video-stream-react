import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


const PlayVideo = () => {
  return (
    <div className="play-video">
        <video src={video1} controls autoPlay muted></video>
        <h3>Best YouTube Channel To Learn Coding</h3>
        <div className="play-video-info">
            <p>16k views &bull; 10 days ago</p>
            <div>
            <span><img src={like} alt="" />186</span>
            <span><img src={dislike} alt="" />6</span>
            <span><img src={share} alt="" />75</span>
            <span><img src={save} alt="" />250</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Jack An</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>    
            <div className="video-description">
                <p>Channel that helps you learn web development and programming skills.</p>
                <p>Subscribe to watch More video</p>
                <hr />
                <h4>130 Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>John Doe <span>3day ago</span></h3>
                        <p>This video is very helpful for beginners learning web development.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>407</span>
                            <img src={dislike} alt="" />
                            <span>12</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>John Doe <span>3day ago</span></h3>
                        <p>This video is very helpful for beginners learning web development.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>407</span>
                            <img src={dislike} alt="" />
                            <span>12</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>John Doe <span>3day ago</span></h3>
                        <p>This video is very helpful for beginners learning web development.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>407</span>
                            <img src={dislike} alt="" />
                            <span>12</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>John Doe <span>3day ago</span></h3>
                        <p>This video is very helpful for beginners learning web development.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>407</span>
                            <img src={dislike} alt="" />
                            <span>12</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>John Doe <span>3day ago</span></h3>
                        <p>This video is very helpful for beginners learning web development.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>407</span>
                            <img src={dislike} alt="" />
                            <span>12</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>John Doe <span>3day ago</span></h3>
                        <p>This video is very helpful for beginners learning web development.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>407</span>
                            <img src={dislike} alt="" />
                            <span>12</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PlayVideo