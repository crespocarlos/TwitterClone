import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';
import TweetActions from './actions/TweetActions';
import TweetStore from './stores/TweetStore';

TweetActions.getAllTweets();

let getAppState = () => {
    return {tweetsList: TweetStore.getAll()};
};

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this._onChange = this._onChange.bind(this);
    }
    addTweet(tweetToAdd) {
        $.post('./tweets', { body: tweetToAdd })
            .success(savedTweet => {
                let newTweetsList = this.state.tweetsList;
                newTweetsList.unshift(savedTweet);
                this.setState(this.formattedTweets(newTweetsList));

            })
            .error(error => console.log);
    }
    componentDidMount() {
        TweetStore.addChangeListener(this._onChange);
    }
    componenWillUnmount(){
        TweetStore.removeChangeListener(this._onChange);
    }
    _onChange(){
        this.setState(getAppState());
    }
    render() {
        console.log('rá');
        return (
            <div id="container">
                <TweetBox />
                <TweetsList tweets={this.state.tweetsList} />
            </div>
        );
    }
}

let documentReady = () => {
    let reactNode = document.getElementById('react');
    if (reactNode) {
        ReactDOM.render(<Main />, reactNode);
    }
};

$(documentReady);
