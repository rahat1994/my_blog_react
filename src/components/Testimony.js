import React ,{ Component } from 'react';
import axios from 'axios';

const API_ENDPOINT = 'http://jsonplaceholder.typicode.com';

class Testimony extends React.Component{

    state ={
        quote:[]
    }

    componentDidMount() {

        const url = `${API_ENDPOINT}/users/`;
            axios.get(url).then(response => response.data)
            .then((data) => {
              this.setState({ users: data })
              console.log(this.state.users)
             })
    }   
    render(){
        return (
            <div id="colorlib-testimony">
                <div className="container">
                <div className="row text-center">
                    <h2 className="bold">Quotes</h2>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                    <span>Quotes</span>
                    <h2>Wise people Say</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="rotate">
                        <h2 className="heading">Says</h2>
                    </div>
                    </div>
                </div>
                <div className="row animate-box">
                    <div className="owl-carousel">
                    <div className="item">
                        <div className="col-md-12 text-center">
                        <div className="testimony">
                            <blockquote>
                            <p>"A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <span>" — George Brooks</span>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="col-md-12 text-center">
                        <div className="testimony">
                            <blockquote>
                            <p>"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                            <span>" — Daniel Foster</span>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="col-md-12 text-center">
                        <div className="testimony">
                            <blockquote>
                            <p>"When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>
                            <span>" — Liam Jenkins</span>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          );
    };
}


export default Testimony;