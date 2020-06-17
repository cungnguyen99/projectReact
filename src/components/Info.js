import React, { Component } from 'react'
import img1 from '../images/01.jpg'
import img2 from '../images/02.jpg'
import img3 from '../images/03.jpg'
export default class Info extends Component {
  state = {
    services: [
      {
        image: img1,
        title: 'For those about to cars...',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
      },
      {
        image: img2,
        title: 'We salute you!',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
      },
      {
        image: img3,
        title: 'Let there be car!',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
      }]
  }
  render() {
    return (
      <section className="info-home">
            {
              this.state.services.map((item, index) => {
                return  <div className=
                {index!==1?"intro-center flex-row wrapp-intro":
                "intro-center text-right flex-row"} key={index}>                  
                 <div class="img-intro">
                    <img className="img-fluid rounded-circle" src={item.image} alt="" />
                </div>
                  <div className="text-intro">
                      <h2>{item.title}</h2>
                      <p>{item.info}</p>
                  </div>
                  </div>
                  })
              }
      </section>
    )
  }
}
