import React, { Component } from 'react'
import img1 from '../images/details-2.jpeg'
import img2 from '../images/details-3.jpeg'
import img3 from '../images/details-4.jpeg'
export default class Info extends Component {
  state = {
    services: [
      {
        image: img1,
        title: 'For those about to rock...',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
      },
      {
        image: img2,
        title: 'We salute you!',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
      },
      {
        image: img3,
        title: 'Let there be rock!',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
      }]
  }
  render() {
    return (
      <section className="info">
        <div className='container'>
            {
              this.state.services.map((item, index) => {
                return  <div className={{index}===1?"row d-flex flex-row-reverse":"row"} key={index}>                  
                 <div class="col-lg-6">
                  <div className="p-5">
                    <img className="img-fluid rounded-circle" src={item.image} alt="" />
                  </div>
                </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h2 className="display-4">{item.title}</h2>
                      <p>{item.info}</p>
                    </div>
                  </div>
                  </div>
                  })
              }
          </div>
      </section>
    )
  }
}
