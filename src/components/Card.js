import React from 'react';
import './Card.css'
import steakPhoto from '../images/steak.jpeg'


const Card = (props) => {
    return (
        <div className='ui centered cards cardContent'>
            <div className={'card'}>
                <div className={'image'}>
                    <img src={steakPhoto} alt={'steak'}/>
                </div>
                <div className={'content'}>
                    <div className={'header'}>
                        Steak
                    </div>
                    <div className={'description'}>
                        High protein
                    </div>
                </div>
                <div className={'extra content'}>
                    <div className={'ui two buttons'}>
                        <div className={'ui basic green button'}>Approve</div>
                        <div className={'ui basic red button'}>Reject</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card
