// import React from "react";

// const Titles = () => (
// 	<div>
// 		<h1 className="title-container__title">Weather Finder</h1>
// 		<h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
// 	</div>
// );

// export default Titles;

import React from "react";

class Titles extends React.Component {

    render() {

        return (

            <div>

                <h1 className="title-container__title">Global Weather Search </h1>
                <p className="title-container__subtitle"> Search for weather conditions in any part of the World </p>

                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="country" placeholder="Country"/>
                    <button>Search</button>
                </form>
                <a href="https://twitter.com/eniks16208" target="_blank" className="icon-link">
                    <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"/>
                </a>
            </div>
        )
    }
}


export default Titles;