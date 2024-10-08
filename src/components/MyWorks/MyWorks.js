
import React, { Component } from 'react'
import blog from '../../images/pics/personalBlog.png'
import shopping from '../../images/pics/shopping-website.jpg'
import shop_react from '../../images/pics/shopping_react.png'
import trello from '../../images/pics/trello.jpg'
import ks_kitchen from '../../images/pics/ks_kitchen.jpg'
import weather from '../../images/pics/weather.jpg'
import expenseTracker from '../../images/pics/expenseTracker.jpg'

import Portfolio from './Portfolio'
import './MyWorks.scss';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Title = styled.h2`
    position: relative;
    font-size: var(--h2-font-size);
    color: var(--dark-color);
    margin: var(--mb-3) 0;
    padding-top: var(--mb-1);
    text-align: center;
    text-transform: uppercase;
    
    &:after {
        position: absolute;
        content: "";
        width: 35px;
        height: .18rem;
        left: 0;
        right: 0;
        margin: auto;
        top: 3rem;
        background-color: var(--first-color);
    }
     @media screen and (min-width: 768px){
      margin-bottom: 0.1rem;
      &:after{
        width: 64px;
        top: 4rem;
      }
  }
    `
export class MyWorks extends Component {
    state = {
        loading: true,
        filterMatches: [],
        typeFilter: 'All',
        resultFilter: 'All',
        projects: [
            {
                "id": "1",
                "title": "Shopping App",
                "type": "E-commerce",
                "img": { shop_react },
                "demo": "https://kateshop.netlify.app/",
                "code": "https://github.com/KateSeo0826/shopping-cart-react",
                "class": "overlayTop"
            },
            {
                "id": "2",
                "title": "ExpenseTracker App",
                "type": "Web Application",
                "img": { expenseTracker },
                "demo": "https://money-tracker-855ec.web.app/login",
                "code": "https://github.com/KateSeo0826/expense-tracker",
                "class": "overlayTop"
            },
            {
                "id": "3",
                "title": "KS Kitchen",
                "type": "E-commerce",
                "img": { ks_kitchen },
                "demo": "https://kskitchen.netlify.app",
                "code": "https://github.com/KateSeo0826/Ks_Kitchen",
                "class": "overlayBottom"
            },
            {
                "id": "4",
                "title": "Weather App",
                "type": "Web Application",
                "img": { weather },
                "demo": "https://weather16days.netlify.app/",
                "code": "https://github.com/KateSeo0826/weatherapp_16days",
                "class": "overlayBottom"
            },
            {
                "id": "5",
                "title": "Trello",
                "type": "Web Application",
                "img": { trello },
                "demo": "https://kstrello.netlify.app",
                "code": "https://github.com/KateSeo0826/trello_react",
                "class": "overlayBottom"

            },
            {
                "id": "6",
                "title": "Shopping App",
                "type": "E-commerce",
                "img": { shopping },
                "demo": "https://shopping--ecommerce.herokuapp.com/",
                "code": "https://github.com/KateSeo0826/shopping-ecommerce",
                "class": "overlayTop"
            },
            {
                "id": "7",
                "title": "Personal Blog",
                "type": "Web Application",
                "img": { blog },
                "demo": "https://kateblog.netlify.app/home",
                "code": "https://github.com/KateSeo0826/kateblog",
                "class": "overlayTop"

            },
        ]
    }
    componentWillMount() {
        this.setState({
            loading: false,
            filterMatches: this.state.projects
        })
    }
    showProject = (types) => {
        const list = this.state.projects.filter((match) => {
            return match.type === types
        })

        this.setState({
            filterMatches: types === 'All' ? this.state.projects : list,
        })

    }
    render() {
        return (
            <div className="mywork section-tours" id='portfolio'>
                <div className="container">
                    <div className="row">
                        <div className="col title">
                            <Title>My Portfolio</Title>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 btns">
                            <button onClick={() => this.showProject('All')}>All</button>
                            <button onClick={() => this.showProject('E-commerce')}>E-commerce</button>
                            <button onClick={() => this.showProject('Web Application')}>Web application</button>
                        </div>
                    </div>
                </div>
                <Fade bottom>
                    <Portfolio filterMatches={this.state.filterMatches} />
                </Fade>
            </div>

        )
    }
}

export default MyWorks;
