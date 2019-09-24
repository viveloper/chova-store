import React from 'react';

export default class Banner extends React.Component {
  state = {
    currentBannerId: '',
    currentBannerIndex: 0,
    slideWindowStartIndex: 0,
    slideWindowSize: 5
  }

  bannerChangeInterval = null;

  componentDidMount() {    
    this.bannerChangeInterval = setInterval(()=>{
      this.increaseCurrentBannerIndex();
    }, 5000);    
  }  

  componentWillUnmount() {
    clearInterval(this.bannerChangeInterval);
  }

  onClickBanner = (index) => {
    this.setState({
      currentBannerId: this.props.bannerInfo[index].id,
      currentBannerIndex: index
    });
  }

  increaseCurrentBannerIndex = () => {
    const currentIndex = this.state.currentBannerIndex;
    let nextIndex = 0;
    if (currentIndex + 1 < this.props.bannerInfo.length) {
      nextIndex = currentIndex + 1;
    }

    let slideWindowStartIndex = this.state.slideWindowStartIndex;
    let slideWindowEndIndex = this.state.slideWindowStartIndex + this.state.slideWindowSize - 1;
    if (nextIndex < slideWindowStartIndex) {
      while(slideWindowEndIndex!==nextIndex && slideWindowStartIndex>0) {
        slideWindowStartIndex--;
        slideWindowEndIndex--;
      }      
    }
    else if (nextIndex > slideWindowEndIndex) {
      while(slideWindowStartIndex!==nextIndex && slideWindowEndIndex<this.props.bannerInfo.length-1) {
        slideWindowStartIndex++;
        slideWindowEndIndex++;
      }      
    }
    else {

    }

    const newCurrentBannerId = this.props.bannerInfo[nextIndex].id;
    this.setState(
      {
        currentBannerId: newCurrentBannerId,
        currentBannerIndex: nextIndex,
        slideWindowStartIndex: slideWindowStartIndex
      },
      () => {
        // console.log(this.state.currentBannerId)
      }
    );
  }

  decreaseCurrentBannerIndex = () => {
    const currentIndex = this.state.currentBannerIndex;
    let prevIndex = this.props.bannerInfo.length - 1;
    if (currentIndex - 1 >= 0) {
      prevIndex = currentIndex - 1;
    }

    let slideWindowStartIndex = this.state.slideWindowStartIndex;
    let slideWindowEndIndex = this.state.slideWindowStartIndex + this.state.slideWindowSize - 1;
    if (prevIndex < slideWindowStartIndex) {
      while(slideWindowEndIndex!==prevIndex && slideWindowStartIndex>0) {
        slideWindowStartIndex--;
        slideWindowEndIndex--;
      }      
    }
    else if (prevIndex > slideWindowEndIndex) {
      while(slideWindowStartIndex!==prevIndex && slideWindowEndIndex<this.props.bannerInfo.length-1) {
        slideWindowStartIndex++;
        slideWindowEndIndex++;
      }      
    }
    else {

    }

    const newCurrentBannerId = this.props.bannerInfo[prevIndex].id;
    this.setState(
      {
        currentBannerId: newCurrentBannerId,
        currentBannerIndex: prevIndex,
        slideWindowStartIndex: slideWindowStartIndex
      },
      () => {
        // console.log(this.state.currentBannerId)
      }
    );
  }

  render() {    
    const bannerInfo = this.props.bannerInfo;
    let bannerImgList = bannerInfo.map((item, index) => {
      let style = { display: 'none' };
      if (index === this.state.currentBannerIndex) {
        style = { display: 'list-item' }
      }
      return (
        <li key={index} style={style}>
          <img src={item.image} alt="banner" />
        </li>
      );
    });

    let bannerDescList = bannerInfo.map((item, index) => {
      let li_style = {};
      let p_style = {};
      if (index === this.state.currentBannerIndex) {
        li_style = { background: '#fee600' };
        p_style = { color: '#000' };
      }

      let slideWindowStartIndex = this.state.slideWindowStartIndex;
      let slideWindowEndIndex = this.state.slideWindowStartIndex + this.state.slideWindowSize - 1;
      if (index >= slideWindowStartIndex && index <= slideWindowEndIndex) {
        li_style = { ...li_style, display: 'list-item' };
      }
      else {
        li_style = { ...li_style, display: 'none' };
      }

      return (
        <li key={index} onClick={() => { this.onClickBanner(index) }} style={li_style}>
          <p style={p_style}>{item.title}</p>
          <span className="description">{item.description}</span>
        </li>
      );
    });

    return (
      <div className="main_banner">
        <div className="main_bn">
          <ul>
            {bannerImgList}
          </ul>
        </div>
        <div className="list_bn">
          <div className="top" onClick={this.decreaseCurrentBannerIndex}>
            <img src="/img/main/btn_listup.jpg" alt="btn_listup.jpg" />
          </div>
          <ul>
            {bannerDescList}
          </ul>
          <div className="bottom" onClick={this.increaseCurrentBannerIndex}>
            <img src="/img/main/btn_listdown.jpg" alt="btn_listdown.jpg" />
          </div>
        </div>
      </div>
    );
  }
}