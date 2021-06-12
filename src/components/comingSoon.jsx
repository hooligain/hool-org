import React from 'react'
import Header from './header';
export default function ComingSoon({onSwitchPage}) {
    return (
        <div className="ComingSoon">
            <Header onSwitchPage={onSwitchPage}/>
            <div className="ComingSoon-content">
                <p>Coming soon</p>
                <button onClick={() => onSwitchPage('HomePage')}>Back to Home</button>
            </div>
        </div>
    )
}
