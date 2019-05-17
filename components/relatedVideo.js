class RelatedVideo extends React.Component {

    render() {
        let { data }= this.props;
        return (
            <React.Fragment>
                <div className="video_poster"></div>
                <h3>{data.title}</h3>
                <button type="button">Play</button>
            </React.Fragment>
        )
    }

}

export default RelatedVideo;