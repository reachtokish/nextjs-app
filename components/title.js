class Title extends React.Component {

    render() {
        let { movieData, isStarred } = this.props;
        return (
            <div className="movie_title">
                <div className="poster"><img src="/static/poster.jpg" /></div>
                <div className="title">
                    <div className="title_text">
                        <h2>{movieData.title}</h2>
                        <button className={"star_btn " + (isStarred === true ? "isStarred" : null)} onClick={() => this.props.makeStarred()} type="button">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="126.729px" height="126.73px" viewBox="0 0 126.729 126.73" style={{enableBackground: "new 0 0 126.729 126.73"}}>
                                <g>
                                    <path d="M121.215,44.212l-34.899-3.3c-2.2-0.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101,0l-12.4,30.3 c-0.8,2.1-2.8,3.5-5,3.7l-34.9,3.3c-5.2,0.5-7.3,7-3.4,10.5l26.3,23.1c1.7,1.5,2.4,3.7,1.9,5.9l-7.9,32.399 c-1.2,5.101,4.3,9.3,8.9,6.601l29.1-17.101c1.9-1.1,4.2-1.1,6.1,0l29.101,17.101c4.6,2.699,10.1-1.4,8.899-6.601l-7.8-32.399 c-0.5-2.2,0.2-4.4,1.9-5.9l26.3-23.1C128.615,51.212,126.415,44.712,121.215,44.212z" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="movie_action">
                        <button type="button">Play</button>
                        <button type="button">Watch Later</button>
                        <button type="button">Share</button>
                    </div>
                </div>
                <style jsx>{`
                    .movie_title {
                        display: flex;
                        align-items: center;
                        margin-bottom: 20px;
                        padding-bottom: 20px;
                        border-bottom: solid 2px #ddd;
                    }
                    .poster {
                        width: 150px;
                        background-color: #ddd;
                        margin-right: 20px;
                    }
                    .poster img {
                        display: block;
                    }
                    .title {
                    
                    }
                    .title_text {
                        display: flex;
                        margin: 0 0 10px;
                    }
                    .title_text h2 {
                        margin: 0;
                        font-weight: 600;
                    }
                    .star_btn {
                        width: 30px;
                        height: 30px;
                        padding: 0;
                        background-color: transparent;
                        border: 0;
                        margin-left: 10px;
                        cursor: pointer;
                    }
                    .star_btn svg {
                        width: 15px;
                        height: 15px;
                        display: block;
                        margin: 0 auto;
                    }
                    .star_btn path {
                        fill: #fff;
                        stroke: #c76919;
                        stroke-width: 4px;
                    }
                    .star_btn:hover path,
                    .star_btn.isStarred path {
                        fill: #c76919;
                    }
                    .movie_action {
                    
                    }
                    .movie_action button {
                        margin-right: 10px;
                        background-color: #0070f3;
                        box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);
                        color: white;
                        border: 0;
                        border-radius: 4px;
                        font-size: 14px;
                        padding: 5px 20px;
                        cursor: pointer;
                    }
                `}</style>
            </div>
        )
    }

}

export default Title;