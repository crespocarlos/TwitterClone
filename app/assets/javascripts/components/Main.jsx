import TweetBox from './TweetBox';
import TweetsList from './TweetsList';

let mockTweets = [
    {
        id: 1,
        name: 'Carlos Crespo',
        body: 'Meu #primeiroTweet"'
    },
    {
        id: 2,
        name: 'Carlos Crespo',
        body: 'Meu #segundoTweet"'
    },
    {
        id: 3,
        name: 'Carlos Crespo',
        body: 'Meu #terceiroTweet"'
    }
];

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tweetsList: [] };
    }
    addTweet(tweetToAdd) {
        let newTweetsList = this.state.tweetsList;
        newTweetsList.unshift({
            id: Date.now(),
            name: 'Guest',
            body: tweetToAdd
        });

        this.setState({ tweetsList: newTweetsList });
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
    ReactDOM.render(
        <Main />,
        document.getElementById('react')
    );
};

$(documentReady);
