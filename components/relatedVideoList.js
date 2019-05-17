import RelatedVideo from './relatedVideo';

class RelatedVideoList extends React.Component {

    componentDidMount() { }

    render() {
        let { data } = this.props;
        return (
            <React.Fragment>
                <div className="related_movies">
					<h2>Related Videos</h2>
					{data.results.length > 0 && <div className="video_group">
						{data.results.slice(0, 4).map((el, index) => (<div className="video_each" key={index}>
							<RelatedVideo data={el} />
						</div>))}
					</div>}
                </div>
				<style jsx global>{`
                    .movie_description {
                        display: flex;
                        margin-bottom: 20px;
                        padding-bottom: 20px;
                        border-bottom: solid 2px #ddd;
                    }
                    .left {
                        padding-right: 30px;
                    }
                    .right {
                    
                    }
                    .movie_description h2 {
                        font-size: 16px;
                        font-weight: 600;
                        margin: 0 0 10px;
                    }
                    .movie_description p {
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 24px;
                    }
                    .movie_large_img {
                        width: 400px;
                        background-color: #f1f1f1;
                    }
                    .movie_large_img img {
                        display: block;
                    }
                    .related_movies {
                    
                    }
                    .related_movies h2 {
                        margin: 0 0 20px;
                        font-weight: 600;
                        font-size: 24px;
                    }
                    .video_group {
                        display: flex;
                        justify-content: space-between;
                    }
                    .video_each {
                        width: 24%;
                    }
                    .video_poster {
                        width: 100%;
                        height: 120px;
                        background-color: #f1f1f1;
                        margin: 0 0 10px;
                    }
                    .video_each h3 {
                        font-size: 16px;
                        font-weight: 600;
                        margin: 0 0 10px;
                    }
                    .video_each button {
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
            </React.Fragment>
        )
    }

}

export default RelatedVideoList;