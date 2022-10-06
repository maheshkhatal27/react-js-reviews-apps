import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {currentReviewIndex: 0}

  displayLeftReviews = () => {
    const {currentReviewIndex} = this.state
    if (currentReviewIndex > 0) {
      this.setState(prevState => ({
        currentReviewIndex: prevState.currentReviewIndex - 1,
      }))
    }
  }

  displayRightReviews = () => {
    const {reviewsList} = this.props
    const {currentReviewIndex} = this.state

    if (currentReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentReviewIndex: prevState.currentReviewIndex + 1,
      }))
    }
  }

  showCurrentReviewItem = reviewItem => {
    const {imgUrl, username, companyName, description} = reviewItem

    return (
      <div className="review-items-container">
        <img className="user-img" src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props

    const {currentReviewIndex} = this.state

    const displayCurrentReview = reviewsList[currentReviewIndex]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            className="button"
            onClick={this.displayLeftReviews}
            testid="leftArrow"
          >
            <img
              className="left-counter-img"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.showCurrentReviewItem(displayCurrentReview)}

          <button
            type="button"
            className="button"
            onClick={this.displayRightReviews}
            testid="rightArrow"
          >
            <img
              className="right-counter-img"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
