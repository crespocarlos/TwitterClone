import TweetBox from './TweetBox';
import TweetsList from './TweetsList';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tweetsList: [] };
    }
    
    formattedTweets(tweetsList) {
        let formattedList = tweetsList.map(tweet => {
            tweet.formattedDate = moment(tweet.created_at).fromNow();
            return tweet;
        });

        return {
            tweetsList: formattedList
        };
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
        $.ajax('/tweets')
            .success(data => this.setState(this.formattedTweets(data)))
            .error(error => console.log);
    }

    render() {
        console.log('rá');
        return (
            <div id="container">
                <TweetBox sendTweet={this.addTweet.bind(this) }/>
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
