import React from 'react';
import styles from './Footer.module.scss';
import Title from "../../common/components/Title/Title";
import Messenger from "./Messenger/Messenger";
import vkIcon from '../../assets/vk.svg';
import twIcon from '../../assets/twitter.svg';
import tmIcon from '../../assets/telegram.svg';
import fbIcon from '../../assets/fb.svg';
import Fade from 'react-reveal/Fade'

class Footer extends React.Component {
    state ={
        title: 'Евгений Турецков',
        messenger: [
            {href: 'https://vk.com/id38646791', icon: vkIcon},
            {href: 'https://twitter.com/str1k4', icon: twIcon},
            {href: 'https://t.me/StrikerXx7689', icon: tmIcon},
            {href: 'https://www.facebook.com/profile.php?id=100002334266350&ref=bookmarks', icon: fbIcon},
        ]
    }

    render = () => {
        let messenger = this.state.messenger.map(m => {
            return <Messenger href={m.href} icon={m.icon}/>
        })
        return (
            <div className={styles.footer}>
                <div className={styles.container}>
                    <Title title={this.state.title}/>
                    <Fade bottom>
                        <div className={styles.messengers}>
                            {messenger}
                        </div>
                        <span className={styles.rights}>© 2020 All rights reserved</span>
                    </Fade>
                </div>
            </div>
        );
    }
}



export default Footer;