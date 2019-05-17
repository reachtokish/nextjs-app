import Title from './../components/title';
import Body from './../components/body';
import RelatedVideoList from './../components/relatedVideoList';
import fetch from 'isomorphic-unfetch';

class Video extends React.Component {

    state = {
		isStarred: null
	}

	componentDidMount() {
        this.setState({
            isStarred: JSON.parse(localStorage.getItem("isStarred"))
        })
	}

	makeStarred() {
		let { isStarred } = this.state;
		localStorage.setItem("isStarred", !isStarred);
		this.setState({
			isStarred: !isStarred
		})
	}
	
	render() {
        let { isStarred } = this.state;
        let { getMovieDataRes, getRelatedMovieDataRes } = this.props;
		return (
			<div className="movie_wrapper">
				<div>
					<div>
						<Title
                            movieData={getMovieDataRes}
                            isStarred={isStarred}
                            makeStarred={() => this.makeStarred()}
                        />
						<Body
                            movieData={getMovieDataRes}
                        />
					</div>
				</div>
				<RelatedVideoList
                    data={getRelatedMovieDataRes}
                />
                <style jsx global>{`
                    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

                    * {
                        box-sizing: border-box;
                        font-family: 'Open Sans', sans-serif;
                    }
                    body {
                        padding: 0;
                        margin: 0;
                    }
                    img {
                        max-width: 100%;
                    }
                    .movie_wrapper {
                        width: 1000px;
                        margin: 0 auto;
                        border: solid 1px #ddd;
                        padding: 15px;
                    }
                `}</style>
			</div>
		);
	}

}

Video.getInitialProps = async function({ req }) {
    let { params } = req;
    const getMovieData = await fetch(`http://demo9371423.mockable.io/movie/${params.id}`);
    const getRelatedMovieData = await fetch(`https://demo9371423.mockable.io/movie/${params.id}/related`);
    const getMovieDataRes = await getMovieData.json();
    const getRelatedMovieDataRes = await getRelatedMovieData.json();
    return {
        getMovieDataRes,
        getRelatedMovieDataRes
    }
}

export default Video;