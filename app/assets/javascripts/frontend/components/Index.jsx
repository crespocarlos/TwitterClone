import React from 'react';
import TweetBox from './TweetBox';
import TweetsList from './TweetsList';
import TweetActions from '../actions/TweetActions';
import TweetStore from '../stores/TweetStore';
import {Link} from 'react-router';

TweetActions.getAllTweets();

let getAppState = () => {
    return { tweetsList: TweetStore.getAll() };
};

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
        TweetActions.getAllTweets();
        TweetStore.addChangeListener(this._onChange);
    }
    componenWillUnmount() {
        TweetStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState(getAppState());
    }
    render() {
        console.log('rá');
        return (
            <div id="container">
                <Link to="/follow">Quem seguir</Link>
                <TweetBox />
                <TweetsList tweets={this.state.tweetsList} />
            </div>
        );
    }
}

export default Index;