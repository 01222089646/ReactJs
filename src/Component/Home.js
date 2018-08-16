import React from 'react';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { logged: true };
    }




    render() {
        return (
            <div>
                Đây là trang web mua sắm 
            </div>
        );
    }
}
export default Home;