class Body extends React.Component {

    render() {
        let { movieData } = this.props;
        return (
            <div className="movie_description">
                <div className="left">
                    <h2>Synopsis</h2>
                    <p>{movieData.overview}</p>
                </div>
                <div className="right">
                    <div className="movie_large_img"><img src="/static/image.jpg" /></div>
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
                `}</style>
            </div>
        )
    }

}

export default Body;