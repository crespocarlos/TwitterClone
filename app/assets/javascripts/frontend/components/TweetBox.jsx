import React from 'react';
import TweetActions from '../actions/TweetActions';

class TweetBox extends React.Component{
    sendTweet(event){
        event.preventDefault();
        TweetActions.sendTweet(this.refs.tweetTextArea.value);
        this.refs.tweetTextArea.value = '';
    }
    
    render() {
        return (
           <div className="row">
                <form onSubmit={this.sendTweet.bind(this)}>
                    <div className="input-field">
                        <textarea id="tweet" ref="tweetTextArea" className="materialize-textarea"/>
                        <label htmlFor="tweet">O que tá acontecendo?</label>
                        <button type="submit" className="btn right">Tweet</button>
                    </div>
                </form>
            </div>
        
        );
    }
}

export default TweetBox;