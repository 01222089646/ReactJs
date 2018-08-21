import React from 'react';
import {Carousel} from 'react-bootstrap'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { logged: true };
    }




    render() {
        return (
            <div>
                <br/>

               
               
               <Carousel>
  <Carousel.Item >
    <img width={400} height={400} alt="" src="http://sohanews.sohacdn.com/thumb_w/660/2017/photo-6-1487059676040-64-0-436-600-crop-1487059888747.jpg" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={400} height={400} alt="" src="https://vtv1.mediacdn.vn/thumb_w/650/2018/4/4/anh-1-tao-1-15228175859241411126029.jpg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={400} height={400} alt="" src="http://product.hstatic.net/1000198833/product/tao-red-delicious.png" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;
            </div>
        );
    }
}
export default Home;